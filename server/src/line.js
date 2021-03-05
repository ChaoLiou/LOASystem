const axios = require('axios');

const signingReqBody = {
    mode: "signing",
    usernames: [],
    taker: "",
    signer: "",
    leaves: [],
    signers: []
};
const takingReqBody = {
    mode: "taking",
    usernames: [],
    taker: "",
    leaves: [],
    signers: []
};

const API_URL = 'https://loasystemxline.azurewebsites.net/api/Notify';

function sendLeaveSigning({ taker, signer, record }) {
    const copy = JSON.parse(JSON.stringify(signingReqBody));
    copy.usernames.push(...[taker.username, signer.username]);
    copy.taker = formatEmployee(taker);
    copy.signer = formatEmployee(signer);
    copy.leaves.push(formatRecord(record));
    copy.signers = record.signings.map(formatSigning);
    axios.put(API_URL, copy).catch(error => {
        console.log(error)
    });
}

function sendLeaveTaking({ taker, signers, records }) {
    const copy = JSON.parse(JSON.stringify(takingReqBody));
    copy.usernames.push(...signers.map(signer => signer.username));
    copy.usernames.push(taker.username);
    copy.taker = formatEmployee(taker);
    copy.leaves = records.map(formatRecord);
    copy.signers = signers.map(signer => ({
        name: signer.username
    }));
    axios.put(API_URL, copy).catch(error => {
        console.log(error)
    });
}

function formatEmployee(employee) {
    return `[${employee.dept}] ${employee.name}(${employee.username})`
}

function formatRecord(record) {
    const leaveTypes = {
        sick: {
            title: '普通傷病假',
            color: '#ffc107'
        },
        familyCare: {
            title: '家庭照顧假',
            color: '#ffc107'
        },
        personal: {
            title: '事假',
            color: '#ff5722'
        },
        annual: {
            title: '特別休假',
            color: '#03a9f4'
        },
        annualPreRequest: {
            title: '預請特別休假',
            color: '#b3e5fc'
        },
        menstrual: {
            title: '生理假',
            color: '#f48fb1'
        },
        preManternity: {
            title: '產檢假',
            color: '#f48fb1'
        },
        manternityMiscarriage: {
            title: '產假(含流產假)',
            color: '#f48fb1'
        },
        accompanyingManternity: {
            title: '陪產假',
            color: '#f48fb1'
        },
        marriage: {
            title: '婚假',
            color: '#ff1744'
        },
        funeral: {
            title: '喪假',
            color: '#607d8b'
        },
        businessTrip: {
            title: '出差假',
            color: '#c32b7f'
        }
    }
    const leaveType = leaveTypes[record.leaveType];
    return {
        type: `[${leaveType ? leaveType.title : leaveType}]`,
        color: leaveType ? leaveType.color : '#6d4c41',
        info: `${generateSummary(record.dates, record.startFrom, record.endTo)}(${generateConsumeSummary(record.dates, record.startFrom, record.endTo)})`
    }
}

function formatSigning(signing) {
    return {
        name: formatEmployee(signing),
        pass: {
            status: signing.pass ? "已簽核" : "已退回",
            color: signing.pass ? "#90ee90" : "#ff4500"
        }
    }
}

function generateSummary(dates, startFrom, endTo) {
    dates = dates.map(d => formatDate(d))
    if (dates.length > 1) {
        return dates.join(', ')
    } else {
        if (startFrom && endTo) {
            return `${dates[0]} - ${startFrom} ~ ${endTo}`
        } else {
            return dates[0]
        }
    }
}

function generateConsumeSummary(dates, startFrom, endTo) {
    dates = dates.map(d => formatDate(d))
    if (startFrom && endTo) {
        return (
            calculateTotalHours(startFrom, endTo) + ' 時'
        )
    } else {
        return dates.length + ' 天'
    }
}

function formatDate(dateString) {
    return dateString
        ? dateString === 'now'
            ? new Date().toJSON().substr(0, 10)
            : new Date(dateString).toJSON().substr(0, 10)
        : ''
}

function calculateTotalHours(startFrom, endTo) {
    if (startFrom && endTo) {
        const fromHours =
            parseInt(startFrom.substr(0, 2)) +
            (startFrom.substr(3, 2) === '00' ? 0 : 0.5)
        const endHours =
            parseInt(endTo.substr(0, 2)) + (endTo.substr(3, 2) === '00' ? 0 : 0.5)
        if (endHours > fromHours) {
            return endHours - fromHours
        } else {
            return -1
        }
    }
    return 0
}

module.exports = {
    sendLeaveSigning,
    sendLeaveTaking,
}