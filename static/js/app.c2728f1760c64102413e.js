webpackJsonp(
  [1],
  {
    '/ozO': function (e, t) {},
    '1B1x': function (e, t) {},
    '1Gwh': function (e, t) {},
    '2j43': function (e, t) {},
    '5cJC': function (e, t) {},
    '6+Lw': function (e, t) {},
    '7Za6': function (e, t) {},
    '7zck': function (e, t) {},
    Akt2: function (e, t) {},
    Bwbz: function (e, t) {},
    C5G7: function (e, t) {},
    CXsG: function (e, t) {},
    GlHt: function (e, t) {},
    'HL/1': function (e, t) {},
    K7yi: function (e, t) {},
    L5HX: function (e, t) {},
    'N/vQ': function (e, t) {},
    N8rP: function (e, t) {},
    NHnr: function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = a('d7EF'),
        o = a.n(n),
        s = a('7+uW'),
        r = {
          render: function () {
            var e = this.$createElement,
              t = this._self._c || e;
            return t('div', { attrs: { id: 'app' } }, [t('router-view')], 1);
          },
          staticRenderFns: [],
        };
      var l = a('VU/8')(
          { name: 'App' },
          r,
          !1,
          function (e) {
            a('N/vQ');
          },
          null,
          null
        ).exports,
        i = a('/ocq'),
        c = a('Xxa5'),
        u = a.n(c),
        d = a('woOf'),
        p = a.n(d),
        f = a('exGp'),
        v = a.n(f),
        m = {
          name: 'EmployeeAction',
          props: {
            employee: { type: Object },
            fullControl: { type: Boolean, default: !1 },
            query: { type: String, default: void 0 },
          },
          data: function () {
            return { sameAsCurrentUser: !1, dialog: !1 };
          },
          mounted: function () {
            this.sameAsCurrentUser =
              this.loginuser.username.toLocaleLowerCase() ===
              this.employee.username.toLocaleLowerCase();
          },
          methods: {
            deleteEmployee: function (e) {
              this.$emit('delete', e);
            },
            toggleEnable: function (e) {
              this.$emit('toggle', e);
            },
          },
        },
        h = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a('span', [
              a(
                'span',
                [
                  a(
                    'router-link',
                    {
                      attrs: {
                        to: {
                          name: 'RecordList',
                          params: { id: e.employee._id, query: e.query },
                        },
                      },
                    },
                    [e._v(e._s(e.loalocale.self.records))]
                  ),
                ],
                1
              ),
              e._v(' '),
              e.fullControl
                ? a(
                    'span',
                    [
                      e._v('\n    |\n    '),
                      a(
                        'router-link',
                        {
                          attrs: {
                            to: {
                              name: 'Detail',
                              params: { id: e.employee._id },
                            },
                          },
                        },
                        [e._v(e._s(e.loalocale.self.edit))]
                      ),
                    ],
                    1
                  )
                : a(
                    'span',
                    [
                      e._v('\n    |\n    '),
                      a(
                        'router-link',
                        {
                          attrs: {
                            to: {
                              name: 'Detail',
                              params: { id: e.employee._id },
                            },
                          },
                        },
                        [e._v(e._s(e.loalocale.self.view))]
                      ),
                    ],
                    1
                  ),
              e._v(' '),
              e.fullControl && !e.sameAsCurrentUser
                ? a('span', [
                    e._v('\n    |\n    '),
                    a(
                      'a',
                      {
                        attrs: { href: '#' },
                        on: {
                          click: function (t) {
                            return (
                              t.stopPropagation(),
                              e.toggleEnable(e.employee._id)
                            );
                          },
                        },
                      },
                      [
                        e._v(
                          e._s(
                            e.employee.enabled
                              ? e.loalocale.self.disable
                              : e.loalocale.self.enable
                          )
                        ),
                      ]
                    ),
                  ])
                : e._e(),
              e._v(' '),
              e.fullControl && !e.employee.enabled
                ? a(
                    'span',
                    [
                      e._v('\n    |\n    '),
                      a(
                        'v-dialog',
                        {
                          attrs: { 'max-width': '320' },
                          model: {
                            value: e.dialog,
                            callback: function (t) {
                              e.dialog = t;
                            },
                            expression: 'dialog',
                          },
                        },
                        [
                          a(
                            'span',
                            { attrs: { slot: 'activator' }, slot: 'activator' },
                            [
                              a(
                                'a',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (t) {
                                      t.stopPropagation(), (e.dialog = !0);
                                    },
                                  },
                                },
                                [e._v(e._s(e.loalocale.self.delete))]
                              ),
                            ]
                          ),
                          e._v(' '),
                          a(
                            'v-card',
                            [
                              a(
                                'v-card-title',
                                { staticClass: 'theme' },
                                [
                                  a(
                                    'v-icon',
                                    {
                                      staticStyle: { 'padding-right': '10px' },
                                      attrs: { color: 'yellow', large: '' },
                                    },
                                    [e._v('warning')]
                                  ),
                                  e._v(' '),
                                  a('span', { staticClass: 'headline' }, [
                                    e._v(
                                      e._s(e.loalocale.self.deletionConfirm)
                                    ),
                                  ]),
                                ],
                                1
                              ),
                              e._v(' '),
                              a('v-card-text', [
                                a('span', { staticStyle: { margin: 'auto' } }, [
                                  e._v(
                                    e._s(e.employee.employeeID) +
                                      ': ' +
                                      e._s(e.employee.name) +
                                      ' (' +
                                      e._s(e.employee.username) +
                                      ')'
                                  ),
                                ]),
                              ]),
                              e._v(' '),
                              a(
                                'v-card-actions',
                                [
                                  a('v-spacer'),
                                  e._v(' '),
                                  a(
                                    'v-btn',
                                    {
                                      attrs: { flat: 'flat' },
                                      on: {
                                        click: function (t) {
                                          e.dialog = !1;
                                        },
                                      },
                                    },
                                    [e._v(e._s(e.loalocale.self.close))]
                                  ),
                                  e._v(' '),
                                  a(
                                    'v-btn',
                                    {
                                      staticClass: 'error',
                                      attrs: { flat: 'flat' },
                                      on: {
                                        click: function (t) {
                                          return (
                                            t.stopPropagation(),
                                            e.deleteEmployee(e.employee._id)
                                          );
                                        },
                                      },
                                    },
                                    [e._v(e._s(e.loalocale.self.delete))]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : e._e(),
            ]);
          },
          staticRenderFns: [],
        };
      var y = a('VU/8')(
          m,
          h,
          !1,
          function (e) {
            a('N8rP');
          },
          null,
          null
        ).exports,
        g = {
          en: {
            th: {
              years: 'Year',
              months: 'Month',
              days: 'Days',
              hours: 'Hours',
              compensatory: 'Compensatory',
              statutory: 'Statutory',
              sick: 'sick leave',
              familyCare: 'family care leave',
              personal: 'personal leave',
              annual: 'annual leave',
              menstrual: 'menstrual leave',
              preManternity: 'pre-manternity leave',
              manternityMiscarriage: 'manternity/miscarriage leave',
              accompanyingManternity: 'accompanying manternity leave',
              marriage: 'marriage leave',
              funeral: 'funeral leave',
              derelictionOfDuty: 'Dereliction Of Duty',
              late: 'Late',
              others: 'Others',
              annualRemainings: 'Annual Leave Remainings',
              annualDeadline: 'Annual Leave Deadline',
              businessTrip: 'business-trip leave',
              annualPreRequest: 'annual prerequest leave',
            },
            tooltip: { export: 'Export', report: 'Report' },
            dialog: { report: 'Choose a Month' },
            input: { report: 'Month' },
          },
          zh: {
            th: {
              years: '年',
              months: '月',
              days: '日',
              hours: '時',
              sick: '普通傷病假',
              familyCare: '家庭照顧假',
              personal: '事假',
              annual: '特別休假',
              menstrual: '生理假',
              preManternity: '產檢假',
              manternityMiscarriage: '產假(含流產假)',
              accompanyingManternity: '陪產假',
              marriage: '婚假',
              funeral: '喪假',
              compensatory: '補休',
              statutory: '公假',
              derelictionOfDuty: '曠職',
              late: '遲到/忘刷卡(次)',
              others: '其他',
              annualRemainings: '剩餘特休(總共)',
              annualDeadline: '特休到期日',
              businessTrip: '出差假',
              annualPreRequest: '預請特休',
            },
            tooltip: { export: '匯出', report: '報表' },
            dialog: { report: '選取報表月份' },
            input: { report: '月份' },
          },
        },
        _ = {
          en: {
            showResigners: 'Show Resigners',
            search: 'Search',
            employeeID: 'ID',
            dept: 'Dept.',
            name: 'Name',
            username: 'English Name',
            arrivedDate: 'Arrived',
            action: 'Action',
            title: 'Employees',
            create: 'Add Employee',
            annualInfo: 'AnnualInfo',
            download: 'Download All Records',
            year: 'Year',
          },
          zh: {
            showResigners: '顯示離職人員',
            search: '檢索',
            employeeID: 'ID',
            name: '員工姓名',
            username: '英文名',
            dept: '部門單位',
            arrivedDate: '到職日期',
            action: '操作',
            title: '員工列表',
            create: '新增員工',
            annualInfo: '特休資訊',
            download: '下載所有員工請假紀錄',
            year: '年份',
          },
        },
        x = {
          en: {
            title: 'LOA System',
            username: 'English Name (case-insensitive)',
            password: 'Password',
            login: 'LOGIN',
            tooltip: 'Leave of Absence System',
            noempty: 'No Empty Allowed',
            notengname: 'Not A English Name',
          },
          zh: {
            title: '請假系統',
            username: '英文名(不需分大小寫)',
            password: '密碼',
            login: '登入',
            tooltip: 'Leave of Absence System',
            noempty: '不可空白',
            notengname: '這不是英文名',
          },
        },
        b = {
          en: {
            records: 'Records',
            edit: 'Edit',
            view: 'View',
            delete: 'Delete',
            disable: 'Disable',
            enable: 'Enable',
            close: 'Close',
            deletionConfirm: 'Do You Really Want to Delete this one?',
          },
          zh: {
            records: '紀錄',
            edit: '編輯',
            view: '檢視',
            delete: '刪除',
            disable: '停用',
            enable: '啟用',
            close: '關閉',
            deletionConfirm: '真的要刪除這個人嗎?',
          },
        },
        k = {
          en: {
            unavailableLTs: 'Expired Leave Types',
            create: 'create',
            update: 'info update',
            textfieldUndone: 'There are textfields still not finished.',
          },
          zh: {
            unavailableLTs: '已過期的假別',
            create: '新增',
            update: '更新資訊',
            textfieldUndone: '尚有欄位未完成填寫',
          },
        },
        w = {
          en: {
            search: 'Search',
            showRejects: 'Show Rejects',
            pass: 'Pass',
            reject: 'Reject',
            appliedDate: 'Applied',
            dates: 'Date(s)',
            leaveType: 'Kind',
            remarks: 'Remarks',
            signings: 'Sign',
            totals: 'Totals',
            action: 'Action',
            hours: 'Hours',
            days: 'Days',
            download: 'Download',
          },
          zh: {
            search: '檢索',
            showRejects: '顯示退回',
            pass: '通過',
            reject: '退回',
            appliedDate: '申請日期',
            dates: '休假日期與時間',
            leaveType: '假別',
            remarks: '備註',
            signings: '簽核',
            totals: '總計',
            action: '操作',
            hours: '時',
            days: '日',
            download: '下載',
          },
        },
        D = {
          en: {
            common: 'Commons',
            report: 'Reports',
            employees: 'Employee List',
            compensatory: 'Compensatory List',
            logout: 'Logout',
            annualReport: 'Annual Report',
            monthlyReport: 'Monthly Report',
            leaveCalendar: 'Your Calendar',
            shiftCalendar: 'Shift Calendar',
            others: 'Others',
          },
          zh: {
            common: '常用',
            report: '報表',
            employees: '員工列表',
            compensatory: '補休',
            logout: '登出',
            annualReport: '年度報表',
            monthlyReport: '月度報表',
            leaveCalendar: '你的月曆',
            shiftCalendar: '班表月曆',
            others: '其他',
          },
        },
        T = {
          en: {
            leaveTypes: {
              sick: 'sick leave',
              familyCare: 'family care leave',
              personal: 'personal leave',
              annual: 'annual leave',
              annualPreRequest: 'pre-request annual leave',
              menstrual: 'menstrual leave',
              preManternity: 'pre-manternity leave',
              manternityMiscarriage: 'manternity/miscarriage leave',
              accompanyingManternity: 'accompanying manternity leave',
              marriage: 'marriage leave',
              funeral: 'funeral leave',
              businessTrip: 'business-trip leave',
            },
            common: { dayUnit: ' days', hourUnit: ' hours' },
            message: {
              already_signed_the_record: 'You have Signed it Already',
              wrong_password: 'Incorrect Password',
              wrong_user_name: 'Incorrect Name',
              restored_successfully: 'Restored Successfully',
              token_validation_failed: 'Token Validation Failed',
              password_updated_successfully:
                'Password Updated Successfully, Please Login with New Password',
              employee_updated_successfully: 'Email Updated Successfully',
              login_user_is_not_found: 'Login User is not Found',
              shift_updated_successfully: 'Shift Updated Successfully',
              unable_to_update_expired_shift: 'Unable to Update Expired Shift',
              shift_deleted_successfully: 'Shift Deleted Successfully',
              shift_config_updated_successfully:
                'Shift Config Updated Successfully',
              all_employees_deleted_successfully:
                'All Employees Deleted Successfully',
              no_access_authority: 'No Access Authority',
              employee_is_not_found: 'Employee is not Found',
              employee_created_successfully: 'Employee Created Successfully',
              the_user_name_exists: 'The User Name Exists',
              employee_deleted_successfully: 'Employee Deleted Successfully',
              records_updated_successfully: 'Records Updated Successfully',
              record_signing_updated_successfully:
                "Record's Signing Updated Successfully",
              record_is_not_found: 'Record is not Found',
              annual_refresh_successfully: 'Annual Refresh Successfully',
            },
            title: { systemNotification: 'System Info: ' },
          },
          zh: {
            leaveTypes: {
              sick: '普通傷病假',
              familyCare: '家庭照顧假',
              personal: '事假',
              annual: '特別休假',
              annualPreRequest: '預請特別休假',
              menstrual: '生理假',
              preManternity: '產檢假',
              manternityMiscarriage: '產假(含流產假)',
              accompanyingManternity: '陪產假',
              marriage: '婚假',
              funeral: '喪假',
              businessTrip: '出差假',
            },
            common: { dayUnit: '天', hourUnit: '小時' },
            message: {
              already_signed_the_record: '您已經簽核過了',
              wrong_password: '密碼有錯',
              wrong_user_name: '名稱有錯',
              token_validation_failed: '權證驗證失敗',
              password_updated_successfully: '密碼更新成功, 請重新登入',
              employee_updated_successfully: 'Email 更新成功',
              restored_successfully: '還原成功',
              login_user_is_not_found: '找不到此登入者',
              shift_updated_successfully: '班表更新成功',
              unable_to_update_expired_shift: '無法更新已過期的班表',
              shift_deleted_successfully: '班表刪除成功',
              shift_config_updated_successfully: '班表設定更新成功',
              all_employees_deleted_successfully: '所有員工刪除成功',
              no_access_authority: '沒有存取權限',
              employee_is_not_found: '找不到此員工',
              employee_created_successfully: '員工建立成功',
              the_user_name_exists: '名稱已存在',
              employee_deleted_successfully: '員工刪除成功',
              records_updated_successfully: '紀錄更新成功',
              record_signing_updated_successfully: '紀錄簽核更新成功',
              record_is_not_found: '找不到此紀錄',
              annual_refresh_successfully: '特別休假重計成功',
            },
            title: { systemNotification: '系統通知: ' },
          },
        },
        C = {
          en: {
            label: { sign: 'Sign:', signed: 'Status:' },
            tooltip: { pass: 'Pass', reject: 'Reject' },
          },
          zh: {
            label: { sign: '簽核:', signed: '狀態:' },
            tooltip: { pass: '通過', reject: '退回' },
          },
        },
        F = {
          en: {
            tooltip: {
              pass: 'Pass',
              reject: 'Reject',
              notSignYet: 'Not Sign Yet',
              signingTime: 'Signed At: ',
            },
          },
          zh: {
            tooltip: {
              pass: '通過',
              reject: '退回',
              notSignYet: '尚未簽核',
              signingTime: '簽核時間: ',
            },
          },
        },
        E = {
          en: {
            title: 'Recalculate Leaves Amount:',
            stringTemplate: { totals: '${0} Days, ', deadline: 'before ${0}' },
          },
          zh: {
            title: '假別更新通知:',
            stringTemplate: {
              totals: '共 ${0} 天, ',
              deadline: '於 ${0} 到期',
            },
          },
        },
        L = {
          en: {
            pickLeaveType: 'Pick a Leave Type, or Check Details:',
            others: 'Others',
            import: 'Import',
          },
          zh: {
            pickLeaveType: '點選假別, 欲檢視假別資訊請至',
            others: '其他',
            import: '加入',
          },
        },
        I = {
          en: {
            stringTemplate: {
              totals: '${0} Days',
              consumes: '${0} Used',
              deadline: 'Before ${0}',
            },
          },
          zh: {
            stringTemplate: {
              totals: '共計 ${0} 天 ${1} 小時',
              consumes: '已用 ${0} 天 ${1} 小時',
              deadline: '於 ${0} 到期',
            },
          },
        },
        R = {
          en: { btn: { iGotIt: 'I Got it' } },
          zh: { btn: { iGotIt: '我知道了' } },
        },
        A = {
          en: {
            showResigners: 'Show Resigners',
            search: 'Search',
            employeeID: 'ID',
            dept: 'Dept.',
            name: 'Name',
            username: 'English Name',
            arrivedDate: 'Arrived',
            level: 'Level',
            action: 'Action',
            compensatory: 'Compensatory',
            title: 'Compensatory',
            download: 'Download',
            showAllHavingCompensatoryLT: 'Show Having Compensatory LT',
          },
          zh: {
            showResigners: '顯示離職人員',
            employeeID: 'ID',
            name: '員工姓名',
            username: '英文名',
            dept: '部門單位',
            arrivedDate: '到職日期',
            action: '操作',
            level: '帳號身分',
            compensatory: '補休假(已用/總共)',
            search: '檢索',
            title: '補休',
            download: '下載',
            showAllHavingCompensatoryLT: '顯示所有未/已休完',
          },
        },
        S = {
          en: {
            showResigners: 'Show Resigners',
            month: 'Month',
            employeeInfo: 'Employee Info',
            monthGroupStat: 'Month Stat',
            leaveTypeGroupStat: 'Leave Type Stat',
            annualStat: 'Annual Stat',
            title: 'Annual Report',
            download: 'Download',
          },
          zh: {
            showResigners: '顯示離職人員',
            month: '月',
            employeeInfo: '員工資訊',
            monthGroupStat: '每月統計',
            leaveTypeGroupStat: '假別統計',
            annualStat: '特休統計',
            title: '年度報表',
            download: '下載',
          },
        },
        $ = {
          en: {
            employeeID: 'ID',
            dept: 'Dept.',
            name: 'Name',
            username: 'English Name',
            arrivedDate: 'Arrived',
            level: 'Level',
            signers: 'Signers',
            email: 'Email',
            noEmpty: 'Not Allow Empty',
            notEmail: 'Invalid Email',
          },
          zh: {
            employeeID: 'ID',
            dept: '部門單位',
            name: '員工姓名',
            username: '英文名',
            arrivedDate: '到職日期',
            level: '帳號身分',
            signers: '簽核人員',
            email: '電子郵件',
            noEmpty: '不可空白',
            invalidEmail: '不合法的 Email',
          },
        },
        U = {
          en: {
            reset: 'Reset',
            password: 'Password',
            email: 'email',
            close: 'Close',
            invalidEmail: 'Invalid Email',
          },
          zh: {
            reset: '重設',
            password: '密碼',
            email: 'Email',
            close: '關閉',
            invalidEmail: 'Email 不合法',
          },
        },
        O = {
          en: {
            consumes: 'Consumes',
            totals: 'Totals',
            hoursLeave: 'Hours Leave Available',
            days: 'days',
            hours: 'hours',
            deadline: 'deadline',
            close: 'CLOSE',
            remove: 'REMOVE',
          },
          zh: {
            consumes: '已用',
            totals: '總共',
            hoursLeave: '接受時數假',
            days: '天數',
            hours: '時數',
            deadline: '到期日',
            close: '關閉',
            remove: '移除',
          },
        },
        N = {
          en: {
            leaveDates: 'Leave Dates',
            from: 'From',
            to: 'To',
            totals: 'Totals',
            remarks: 'Remarks',
            hour: 'hours(please take leave with half hour unit)',
            take: 'Take',
          },
          zh: {
            leaveDates: '請假日期',
            from: '從',
            to: '到',
            totals: '總共',
            remarks: '備註',
            hour: '小時(請以半小時為單位)',
            take: '請假',
          },
        },
        B = {
          en: {
            remarks: 'Remarks',
            remainings: 'Remainings',
            deadline: 'Deadline',
            days: 'Days',
            hours: 'Hours',
          },
          zh: {
            remarks: '備註',
            remainings: '剩餘',
            deadline: '到期日',
            days: '天',
            hours: '小時',
          },
        },
        H = {
          en: {
            leaveTypesDetail: 'Leave Types Details',
            title: '',
            otherInfos: '',
            leaveTypes: {
              officialHoliday: {
                name: 'Official Holiday',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              nationalHoliday: {
                name: 'National Holiday',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              annual: {
                name: 'Annual Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              personal: {
                name: 'Personal Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              familyCare: {
                name: 'family care leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              sick: {
                name: 'Sickness Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              menstrual: {
                name: 'Menstrual Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              marriage: {
                name: 'Marriage Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              manternityMiscarriage: {
                name: 'Manternity/Miscarriage Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              preManternity: {
                name: 'pre-manternity leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              accompanyingManternity: {
                name: 'Accompanying Manternity Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              funeral: {
                name: 'Funeral Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              occpationalSick: {
                name: 'Occpational Sickness Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              official: {
                name: 'Official Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              parentalUnpaid: {
                name: 'Parental Unpaid Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              jobSeeking: {
                name: 'Job Seeking Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              businessTrip: {
                name: 'Business-trip Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              annualPreRequest: {
                name: 'Pre-request Annual Leave',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
            },
          },
          zh: {
            leaveTypesDetail: '所有假別詳細說明',
            title: '適用勞基法人員請假規則簡表(107.8月)',
            otherInfos: [
              '1、本表係依勞動基準法、勞工請假規則、性別工作平等法及其施行細則編製。',
              '2、婚假以1次給足為原則；喪假，如因禮俗原因，得於百日內申請分次給假。',
              '3、事假、普通傷病假、婚假、喪假期間，除延長假期在1個月以上者外，如遇例假、休假（紀念日），應不計入請假期內。',
              '4、事假(家庭照顧假) 、普通傷病假(生理假)以時為單位；婚假、喪假、陪產假及特別休假以日為單位。',
            ],
            leaveTypes: {
              officialHoliday: {
                name: '例假',
                granted: '',
                detailInfo:
                  '勞工每7日中應有2日之休息，其中1日為例假，1日為休息日。',
                others: { paidInfo: '', reference: '勞動基準法第36條' },
              },
              nationalHoliday: {
                name: '國定假日',
                granted: '',
                detailInfo:
                  '內政部所定應放假之紀念日、節日、勞動節及其他中央主管機關指定應放假之日。',
                others: { paidInfo: '', reference: '勞動基準法第37條' },
              },
              annual: {
                name: '特別休假',
                granted: [
                  '公司(法規)',
                  '10天(3天)',
                  '11天(7天)',
                  '12天(10天)',
                  '14天(14天)',
                  '15-19天(15天)',
                  '20~30天(16~30天)',
                ],
                detailInfo: [
                  '員工在同一事業單位繼續工作滿一定期間者，應給予特別休假',
                  '6個月至未滿1年',
                  '工作1年以上未滿2年',
                  '工作2年以上未滿3年',
                  '工作3年以上未滿5年',
                  '工作5年以上未滿10年',
                  '服務滿10年以上，每年加給1日，加至30日止。',
                ],
                others: {
                  paidInfo: '工資照給。(不扣全勤)',
                  reference: '勞動基準法第38條',
                },
              },
              personal: {
                name: '事假',
                granted: '14日(全年)',
                detailInfo: [
                  '1、因有事故必須親自處理者。',
                  '2、須親自辦理請假程序，經核准後始得離開。',
                  '3、緊急事故得由同事或家屬親友代辦請假手續。',
                ],
                others: {
                  paidInfo: '不給工資。(扣全勤) 按日扣除薪資。',
                  reference: '勞工請假規則第7條',
                },
              },
              familyCare: {
                name: '家庭照顧假',
                granted: '7日(全年)',
                detailInfo:
                  '家庭成員預防接種、發生嚴重之疾病或其他重大事故須親自照顧時，得請家庭照顧假，其請假日數併入事假計算。受僱者之配偶未就業者，不適用規定。',
                others: {
                  paidInfo: '不給工資。(不扣全勤) 按日扣除薪資。',
                  reference: '性別工作平等法第二十條',
                },
              },
              sick: {
                name: '普通傷病假',
                granted: '30日(全年)',
                detailInfo: [
                  '因疾病必須治療或休養者。二日以上之病假，應檢具合法醫療機構或醫師證明書。經醫師診斷，罹患癌症（含原位癌）採門診方式治療或懷孕期間需安胎休養者，其治療或休養期間，併入住院傷病假計算。',
                  '1、未住院者，1年內合計不得超過30日。',
                  '2、住院者，2年內合計不得超過1年。',
                  '3、未住院傷病假與住院傷病假2年內合計不得超過1年。',
                  '超過上開規定之期限，經以事假或特別休假抵充後仍未痊癒者，得予留職停薪，但以1年為限。',
                ],
                others: {
                  paidInfo:
                    '1年內未超過30日部分，工資折半發給；超過30日部分，應按日扣除薪資。領有勞工保險普通傷病給付未達工資半數者，由雇主補足之。(扣全勤)',
                  reference: '勞工請假規則第4條',
                },
              },
              menstrual: {
                name: '生理假',
                granted: '每月1日',
                detailInfo:
                  '女性員工因生理日致工作有困難者，每月得請生理假1日，其請假日數併入病假計算。',
                others: {
                  paidInfo:
                    '全年請假日數未逾3日，不併入病假計算，其餘日數併入病假計算。薪資減半發給。(不扣全勤)',
                  reference: '性別工作平等法第十四條',
                },
              },
              marriage: {
                name: '婚假',
                granted: '8日',
                detailInfo: [
                  '1、 結婚事實。',
                  '2、 附有喜帖或結婚證書影本。',
                  '3、 自登記結婚之日前10日起3個月內請畢，但經雇主同意者，得於1年內請畢。',
                ],
                others: {
                  paidInfo: '工資照給。(不扣全勤)',
                  reference: '勞工請假規則第2條',
                },
              },
              manternityMiscarriage: {
                name: '產假(含流產假)',
                granted: ['8星期', '4星期', '1星期', '5日'],
                detailInfo: [
                  [
                    '1、因分娩者。',
                    '2、須呈合法醫療機構醫師證明書。',
                    '3、分娩假不扣除例假日，應一次請畢，不得保留。',
                  ],
                  '妊娠3個月以上流產者，流產假不扣除例假日並應一次請畢。須   附合法醫療機構醫師證明書。',
                  '妊娠2個月以上未滿3個月流產者，不扣除例假日並應一次請畢。須   附合法醫療機構醫師證明書。',
                  '妊娠未滿2個月流產者，不扣除例假日並應一次請畢。須   附合法醫療機構醫師證明書。',
                ],
                others: {
                  paidInfo:
                    '女性員工受僱工作在6個月以上者，停止工作期間工資照給，未滿6個月者減半發給。',
                  reference: '性別工作平等法第十五條',
                },
              },
              preManternity: {
                name: '產檢假',
                granted: '5日',
                detailInfo:
                  '妊娠期間產檢者，得以半日為請假為單位。須附合法醫療機構醫師證明書。',
                others: {
                  paidInfo: '工資照給。(不扣全勤)',
                  reference: '性別工作平等法第十五條',
                },
              },
              accompanyingManternity: {
                name: '陪產假',
                granted: '5日',
                detailInfo: [
                  '員工於其配偶分娩時，給予陪產假5日；受僱者應於配偶分娩之當日及其前後合計15日期間內，擇其中之5日請假。',
                  '上開解釋，舉例而言，某甲配偶於12月8日分娩，若於實際分娩當日（含）之後始首次請假，則得請假之期間應自分娩當日往後推算至第15日(即至12月22日)擇其中5日請陪產假。其於分娩當日往前推算7日之日(即12月1日)請首日陪產假者，其餘陪產假至遲應於12月15日前請畢。',
                ],
                others: {
                  paidInfo: '工資照給。(不扣全勤)',
                  reference: '性別工作平等法第十五條',
                },
              },
              funeral: {
                name: '喪假',
                granted: ['8日', '6日', '3日', '', '', ''],
                detailInfo: [
                  '父母、養父母、繼父母、配偶喪亡者',
                  '祖父母（含外祖父母）、子女、配偶之父母、配偶之養父母或繼父母喪亡者',
                  '曾祖父母、兄弟姊妹、配偶之祖父母（含外祖父母）喪亡者',
                  '1、喪假得依習俗分次申請。',
                  '2、應於死亡之日起百日內請畢為限。',
                  '3、須檢附訃聞或死亡證明書及關係文件。',
                ],
                others: {
                  paidInfo: '工資照給。(不扣全勤)',
                  reference: '勞工請假規則第3條',
                },
              },
              occpationalSick: {
                name: '公傷病假',
                granted: '依實際需要給予',
                detailInfo:
                  '因職業災害而致殘廢、傷害或疾病者，其治療、休養期間，給予公傷病假。',
                others: {
                  paidInfo:
                    '按工資數額補償。但同一事故依勞工保險條例或其他法令規定，已由公司支付費用補償者，公司得予抵充之。',
                  reference: '勞工請假規則第6條',
                },
              },
              official: {
                name: '公假',
                granted: '依實際需要給予',
                detailInfo:
                  '員工奉派出差、考察、訓練、兵役召集及其他法令規定應給公假等，依實際需要天數給予公假。',
                others: {
                  paidInfo: '工資照給。(不扣全勤)',
                  reference: '勞工請假規則第8條',
                },
              },
              parentalUnpaid: {
                name: '育嬰留職停薪假',
                granted: '二年為限',
                detailInfo: [
                  '受僱者任職滿一年後，於每一子女滿三歲前，得申請育嬰留職停薪。 ',
                  '※檢附證明文件，可申請6個月60% 投保薪資。受僱者之配偶未就業者，不適用規定。',
                ],
                others: {
                  paidInfo: '不給工資。公司免繳勞健退費用，員工可遞延3年',
                  reference: '性別工作平等法第十六條',
                },
              },
              jobSeeking: {
                name: '謀職假(非自願離職)',
                granted: '依法定預告期間給假',
                detailInfo: [
                  '1、任職三個月以上一年未滿者，於十日前預告之。',
                  '2、任職一年以上三年未滿者，於二十日前預告之。',
                  '3、任職三年以上者，於三十日前預告之。',
                ],
                others: {
                  paidInfo:
                    '於接到預告後，於未逾法定預告日起算之給假總日數內，為另謀工作得於工作時間請假外出，請假時數，每星期不得超過2日，請假期間工資照給。',
                  reference: '勞動基準法第16條',
                },
              },
              businessTrip: {
                name: '出差假',
                granted: '',
                detailInfo: '',
                others: { paidInfo: '', reference: '' },
              },
              annualPreRequest: {
                name: '預請特別休假',
                granted: '同特別休假',
                detailInfo: '預請下一年度的特別休假',
                others: { paidInfo: '同特別休假', reference: '同特別休假' },
              },
            },
          },
        },
        M = {
          en: {
            showResigners: 'Show Resigners',
            employeeInfo: 'Employee Info',
            dateGroupStat: 'Date Stat',
            leaveTypeGroupStat: 'Leave Type Stat',
            day: 'Day',
            title: 'Monthly Report',
            download: 'Download',
          },
          zh: {
            showResigners: '顯示離職人員',
            employeeInfo: '員工資訊',
            dateGroupStat: '每日統計',
            leaveTypeGroupStat: '假別統計',
            day: '日',
            title: '月度報表',
            download: '下載',
          },
        },
        P = {
          en: {
            employeeID: 'ID',
            dept: 'Dept',
            name: 'Name',
            username: 'English Name',
            arrivedDate: 'Arrived',
            level: 'Level',
            email: 'Email',
          },
          zh: {
            employeeID: 'ID',
            dept: '部門單位',
            name: '員工姓名',
            username: '英文名',
            arrivedDate: '到職日期',
            level: '帳號身分',
            email: '電子郵件',
          },
        },
        z = {
          en: {
            title: 'Your Calendar',
            showOnlyYours: 'Show Only Yours',
            showOnlyUsername: 'Show Only Username',
            descriptionOfShowOnlyYours: '',
            descriptionOfShowOnlyUsername: '',
            descriptionOfCalendarController: '',
            descriptionOfCalendar1: '',
            descriptionOfCalendar2: '',
            dept: 'Dept.',
            allDept: 'All Dept.',
          },
          zh: {
            title: '你的月曆',
            showOnlyYours: '只顯示你的假',
            showOnlyUsername: '只顯示名稱',
            descriptionOfShowOnlyYours:
              '若你是主管, 或是需要為他人做簽核, 可以控制它, 月曆會一併把你所負責簽核的請假呈現出來.',
            descriptionOfShowOnlyUsername:
              '若你是主管, 或是需要為他人做簽核, 可以將它開啟, 月曆上會把相同員工的假別上相同顏色.',
            descriptionOfCalendarController:
              '控制月曆, 左至右分別是: 往前一個月, 顯示目前年/月, 往後一個月, 到目前的年/月',
            descriptionOfCalendar1: '包含請假, 簽核, 都可以在你的月曆上操作. ',
            descriptionOfCalendar2:
              '若要請假, 請點選日期數字, 並在開啟的視窗中填完所需資訊; 若要簽核, 請點選正在閃爍中的請假項目, 並在開啟的視窗對此假通過或拒絕.',
            dept: '部門',
            allDept: '所有部門',
          },
        },
        j = {
          en: {
            unavailableLTs: 'Expired Leave Types',
            save: 'Save',
            cancel: 'Cancel',
            runOutQotaOfLeave: 'Run out the Quota in this Leave Type',
          },
          zh: {
            unavailableLTs: '已過期的假別',
            save: '確定',
            cancel: '取消',
            runOutQotaOfLeave: '此假別的請假數已超量',
          },
        },
        Y = {
          en: {
            applied: 'Applied',
            taken: 'Taken',
            remarks: 'Remarks',
            defaultAgent: 'None',
          },
          zh: {
            applied: '申請時間',
            taken: '請假時間',
            remarks: '備註',
            defaultAgent: '無',
          },
        },
        G = {
          en: {
            title: 'Shift Calendar',
            showOnlyYours: 'Show Only Yours',
            showOnlyUsername: 'Show Only Username',
            dept: 'Dept.',
            allDept: 'All Dept.',
            download: 'Download',
            expired: 'Expired',
            expiredAt: 'Expired At',
            workdaysBeforeCurrentMonthEnds:
              '{0}th Workdays Before Current Month Ends',
          },
          zh: {
            title: '班表月曆',
            showOnlyYours: '只顯示你的假',
            showOnlyUsername: '只顯示名稱',
            dept: '部門',
            allDept: '所有部門',
            download: '下載',
            expired: '已過期',
            expiredAt: '到期日',
            workdaysBeforeCurrentMonthEnds: '月底前第 {0} 個工作天',
          },
        },
        V = {
          en: { update: 'Update Daypart Description' },
          zh: { update: '更新時間段說明' },
        },
        W = {
          en: {
            skip: 'Skip tour',
            previous: 'Previous',
            next: 'Next',
            finish: 'Finish',
          },
          zh: {
            skip: '略過',
            previous: '上一步',
            next: '下一步',
            finish: '完成',
          },
        },
        q = {
          Report: g.zh,
          List: _.zh,
          EmployeeAction: b.zh,
          Login: x.zh,
          Detail: k.zh,
          RecordList: w.zh,
          NavDrawer: D.zh,
          shared: T.zh,
          SigningBlock: C.zh,
          SigningTooltip: F.zh,
          LeaveTypeRefreshedNotification: E.zh,
          SystemNotification: R.zh,
          CompensatoryList: A.zh,
          LeaveTypeContainer: L.zh,
          LeaveTypeTooltip: I.zh,
          AnnualReport: S.zh,
          EmployeeProfile: $.zh,
          EmployeeAccountSettings: U.zh,
          LeaveTypeEditorDialog: O.zh,
          LeaveForm: N.zh,
          LeaveContainer: B.zh,
          LeaveTypeInfo: H.zh,
          MonthlyReport: M.zh,
          EmployeeInfo: P.zh,
          LeaveCalendar: z.zh,
          LeaveTakingBlock: j.zh,
          LeaveDetailInfo: Y.zh,
          Tour: W.zh,
          ShiftCalendar: G.zh,
          ShiftConfig: V.zh,
        },
        K = {
          compensatory: { keyword: '補休' },
          cookie: {
            expiredPeriod: {
              oneYear: '1Y',
              oneMonth: '1M',
              oneDay: '1D',
              oneWeek: 7,
              oneHour: '1h',
            },
          },
          shiftDaypart: {
            早: { color: 'amber lighten-3' },
            中: { color: 'blue-grey lighten-1' },
            日: { color: 'teal lighten-3' },
          },
          shiftEmployee: {
            rock: { color: 'cyan lighten-3' },
            olivia: { color: 'blue lighten-3' },
            vivian: { color: 'purple lighten-3' },
          },
          deptOptions: [
            '行政部(A)',
            '管理部(A)',
            '客服部(C)',
            '資訊部(I)',
            '技術支援(S)',
            '業務部(B)',
          ],
          deptsThatSameDeptEmployeeHavingSameReadAccess: ['客服部(C)'],
          shiftDepts: ['客服部(C)'],
          levelOptions: ['admin', 'manager', 'normal'],
          customLeaveType: {
            index: 0,
            enabled: !1,
            default: !1,
            icon: 'event',
            class: ['teal', 'lighten-3', 'white--text'],
            color: '#80CBC4',
            name: '',
            title: '',
            consumes: { days: 0, hours: 0 },
            totals: { days: 1, hours: 0 },
            deadline: new Date().toISOString().substr(0, 10),
            dialog: !1,
            datepicker: !1,
            countdown: !0,
            halfHoursEnabled: !0,
          },
          leaveTypes: [
            {
              index: 0,
              enabled: !0,
              icon: 'hotel',
              class: ['amber', 'lighten-3', 'white--text'],
              color: '#FFE082',
              name: 'sick',
              title: q.shared.leaveTypes.sick,
              consumes: { days: 0, hours: 0 },
              totals: { days: 30, hours: 0 },
              deadline: '',
              dialog: !1,
              datepicker: !1,
              countdown: !1,
              halfHoursEnabled: !0,
              default: !0,
            },
            {
              index: 1,
              enabled: !1,
              icon: 'local_hospital',
              class: ['deep-orange', 'lighten-3', 'white--text'],
              color: '#FFAB91',
              name: 'familyCare',
              title:
                q.shared.leaveTypes.familyCare +
                '(' +
                q.shared.leaveTypes.personal +
                ')',
              consumes: { days: 0, hours: 0 },
              totals: { days: 7, hours: 0 },
              deadline: '',
              dialog: !1,
              datepicker: !1,
              countdown: !1,
              halfHoursEnabled: !1,
              default: !0,
            },
            {
              index: 2,
              enabled: !0,
              icon: 'announcement',
              class: ['deep-orange', 'lighten-3', 'white--text'],
              color: '#FFAB91',
              name: 'personal',
              title: q.shared.leaveTypes.personal,
              consumes: { days: 0, hours: 0 },
              totals: { days: 14, hours: 0 },
              deadline: '',
              dialog: !1,
              datepicker: !1,
              countdown: !1,
              halfHoursEnabled: !0,
              default: !0,
            },
            {
              index: 3,
              enabled: !0,
              icon: 'local_airport',
              class: ['light-blue', 'lighten-2', 'white--text'],
              color: '#4FC3F7',
              name: 'annual',
              title: q.shared.leaveTypes.annual,
              consumes: { days: 0, hours: 0 },
              totals: { days: 0, hours: 0 },
              deadline: '',
              dialog: !1,
              datepicker: !1,
              countdown: !0,
              halfHoursEnabled: !1,
              default: !0,
            },
            {
              index: 4,
              enabled: !1,
              icon: 'favorite',
              class: ['pink', 'lighten-3', 'white--text'],
              color: '#F48FB1',
              name: 'menstrual',
              title: q.shared.leaveTypes.menstrual,
              consumes: { days: 0, hours: 0 },
              totals: { days: 1, hours: 0 },
              deadline: '',
              dialog: !1,
              datepicker: !1,
              countdown: !1,
              halfHoursEnabled: !1,
              default: !0,
            },
            {
              index: 5,
              enabled: !1,
              icon: 'pregnant_woman',
              class: ['pink', 'lighten-3', 'white--text'],
              color: '#F48FB1',
              name: 'preManternity',
              title: q.shared.leaveTypes.preManternity,
              consumes: { days: 0, hours: 0 },
              totals: { days: 5, hours: 0 },
              deadline: '',
              dialog: !1,
              datepicker: !1,
              countdown: !0,
              halfHoursEnabled: !0,
              default: !0,
            },
            {
              index: 6,
              enabled: !1,
              icon: 'airline_seat_flat_angled',
              class: ['pink', 'lighten-3', 'white--text'],
              color: '#F48FB1',
              name: 'manternityMiscarriage',
              title: q.shared.leaveTypes.manternityMiscarriage,
              consumes: { days: 0, hours: 0 },
              totals: { days: 5, hours: 0 },
              deadline: '',
              dialog: !1,
              datepicker: !1,
              countdown: !0,
              halfHoursEnabled: !1,
              default: !0,
            },
            {
              index: 7,
              enabled: !1,
              icon: 'people_outline',
              class: ['pink', 'lighten-3', 'white--text'],
              color: '#F48FB1',
              name: 'accompanyingManternity',
              title: q.shared.leaveTypes.accompanyingManternity,
              consumes: { days: 0, hours: 0 },
              totals: { days: 5, hours: 0 },
              deadline: '',
              dialog: !1,
              datepicker: !1,
              countdown: !0,
              halfHoursEnabled: !1,
              default: !0,
            },
            {
              index: 8,
              enabled: !1,
              icon: 'wc',
              class: ['red', 'lighten-2', 'white--text'],
              color: '#E57373',
              name: 'marriage',
              title: q.shared.leaveTypes.marriage,
              consumes: { days: 0, hours: 0 },
              totals: { days: 8, hours: 0 },
              deadline: '',
              dialog: !1,
              datepicker: !1,
              countdown: !0,
              halfHoursEnabled: !1,
              default: !0,
            },
            {
              index: 9,
              enabled: !1,
              icon: 'hourglass_empty',
              class: ['blue-grey', 'lighten-3', 'white--text'],
              color: '#B0BEC5',
              name: 'funeral',
              title: q.shared.leaveTypes.funeral,
              consumes: { days: 0, hours: 0 },
              totals: { days: 3, hours: 0 },
              deadline: '',
              dialog: !1,
              datepicker: !1,
              countdown: !0,
              halfHoursEnabled: !1,
              default: !0,
            },
            {
              index: 10,
              enabled: !1,
              icon: 'directions_run',
              class: ['purple', 'lighten-3', 'white--text'],
              color: '#CE93D8',
              name: 'businessTrip',
              title: q.shared.leaveTypes.businessTrip,
              consumes: { days: 0, hours: 0 },
              totals: { days: 20, hours: 0 },
              deadline: '',
              dialog: !1,
              datepicker: !1,
              countdown: !1,
              halfHoursEnabled: !0,
              default: !0,
            },
            {
              index: 11,
              enabled: !0,
              icon: 'local_airport',
              class: ['light-blue', 'lighten-4', 'white--text'],
              color: '#B3E5FC',
              name: 'annualPreRequest',
              title: q.shared.leaveTypes.annualPreRequest,
              consumes: { days: 0, hours: 0 },
              totals: { days: 10, hours: 0 },
              deadline: '',
              dialog: !1,
              datepicker: !1,
              countdown: !0,
              halfHoursEnabled: !1,
              default: !0,
            },
          ],
        },
        J = {
          logout: function (e, t) {
            e.delete('loginuser'), e.delete('token'), t.push({ name: 'Login' });
          },
          formatDate: function (e) {
            if (e) {
              var t = 'now' === e ? new Date() : new Date(e),
                a = t.getFullYear().toString(),
                n = (t.getMonth() + 1).toString(),
                o = t.getDate().toString();
              return (
                n.length < 2 && (n = '0' + n),
                o.length < 2 && (o = '0' + o),
                [a, n, o].join('-')
              );
            }
            return '';
          },
          exportExcel: function (e) {
            window.open(
              'data:application/vnd.ms-excel,' +
                encodeURIComponent(
                  '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8" /><title>Excel</title>' +
                    e
                )
            );
          },
          checkIsHalfHourUnit: function (e, t) {
            if (e && t) {
              var a = 60 * parseInt(e.substr(0, 2)) + parseInt(e.substr(3, 2)),
                n = 60 * parseInt(t.substr(0, 2)) + parseInt(t.substr(3, 2));
              return n > a && (n - a) % 30 == 0;
            }
            return !(!e && !t);
          },
          calculateTotalHours: function (e, t) {
            if (e && t) {
              var a = 60 * parseInt(e.substr(0, 2)) + parseInt(e.substr(3, 2)),
                n = 60 * parseInt(t.substr(0, 2)) + parseInt(t.substr(3, 2));
              if (n > a) {
                var o = (n - a) / 60,
                  s = (10 * o) % 10;
                return s > 5
                  ? Math.ceil(o)
                  : 0 === s
                  ? Math.floor(o)
                  : Math.floor(o) + 0.5;
              }
              return -1;
            }
            return 0;
          },
          generateSummary: function (e, t, a) {
            return (e = e.map(function (e) {
              return J.formatDate(e);
            })).length > 1
              ? e.join(', ')
              : t && a
              ? e[0] + ' - ' + t + ' ~ ' + a
              : e[0];
          },
          generateConsumeSummary: function (e, t, a) {
            return (
              (e = e.map(function (e) {
                return J.formatDate(e);
              })),
              t && a
                ? J.calculateTotalHours(t, a) + ' ' + q.RecordList.hours
                : e.length + ' ' + q.RecordList.days
            );
          },
          lookUpCustomMessage: function (e) {
            var t = e.replace ? q.shared.message[e.replace(/\s+/g, '_')] : '';
            return t || e;
          },
          lookUpLeaveTypeIconNClass: function (e) {
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            var t = K.leaveTypes.find(function (t) {
              return t.name === e;
            });
            return {
              icon: t ? t.icon : K.customLeaveType.icon,
              class: t ? t.class : K.customLeaveType.class,
            };
          },
          lookUpLeaveType: function (e) {
            var t = K.leaveTypes.find(function (t) {
              return t.name === e;
            });
            return t || K.customLeaveType;
          },
          stringFormat: function (e) {
            for (
              var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              a[n - 1] = arguments[n];
            return (
              a.forEach(function (t, a) {
                var n = new RegExp('\\$\\{' + a + '\\}');
                e = e.replace(n, t);
              }),
              e
            );
          },
          isLeaveTypeInfoGeneral: function (e) {
            return K.leaveTypes
              .filter(function (e) {
                return e.countdown;
              })
              .some(function (t) {
                return t.name === e;
              });
          },
          getLocaleleaveTypeNames: function (e) {
            return q.shared.leaveTypes[e] ? q.shared.leaveTypes[e] : e;
          },
          getCompensatoryLeaveTypes: function (e) {
            return e.filter(function (e) {
              return e.enabled && e.name.startsWith(K.compensatory.keyword);
            });
          },
          getCompensatoryRecords: function (e) {
            return e.filter(function (e) {
              return (
                e.signings.every(function (e) {
                  return !!e.pass;
                }) && e.leaveType.startsWith(K.compensatory.keyword)
              );
            });
          },
          sumUpTotals: function (e) {
            var t = { days: 0, hours: 0 };
            return (
              e.forEach(function (e) {
                var a = e.days,
                  n = e.halfHours;
                n > 0
                  ? ((t.hours += n / 2),
                    t.hours >= 8 &&
                      ((t.days += Math.floor(t.hours / 8)),
                      (t.hours = t.hours % 8)))
                  : (t.days += a);
              }),
              t
            );
          },
          getUnusedOutLeaveTypes: function (e, t) {
            return e
              .filter(function (e) {
                return (
                  (e.totals.days !== e.consumes.days ||
                    e.totals.halfHours !== e.consumes.halfHours) &&
                  (e.totals.days > 0 || e.totals.halfHours > 0)
                );
              })
              .map(function (e) {
                return {
                  leaveType: e.name,
                  daysNHours: {
                    days: e.consumes.days,
                    hours: e.consumes.halfHours / 2,
                    totalDays: e.totals.days,
                    totalHours: e.totals.halfHours / 2,
                  },
                };
              });
          },
        },
        Q = {
          name: 'SigningTooltip',
          props: {
            signer: { type: Object },
            signings: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          mounted: function () {},
          data: function () {
            return {};
          },
          computed: {
            signingOfTheSigner: function () {
              var e = this,
                t = this.signings
                  .filter(function (t) {
                    return t.username === e.signer.username;
                  })
                  .sort(function (e) {
                    return e.pass ? 1 : -1;
                  });
              return t.length > 0 ? t[0] : void 0;
            },
          },
          methods: {
            signLeave: function (e, t, a) {
              this.$emit('sign', e, t, a);
            },
          },
        },
        X = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a('div', [
              a('span', [
                e._v(e._s(e.signer.name) + '(' + e._s(e.signer.username) + ')'),
              ]),
              e._v(' '),
              e.signingOfTheSigner && void 0 !== e.signingOfTheSigner.pass
                ? e.signingOfTheSigner.pass
                  ? a(
                      'span',
                      [
                        e._v(
                          '\n    ' +
                            e._s(e.loalocale.self.tooltip.pass) +
                            '\n    '
                        ),
                        a('v-icon', { attrs: { color: 'green' } }, [
                          e._v('thumb_up'),
                        ]),
                      ],
                      1
                    )
                  : a(
                      'span',
                      [
                        e._v(
                          '\n    ' +
                            e._s(e.loalocale.self.tooltip.reject) +
                            '\n    '
                        ),
                        a('v-icon', { attrs: { color: 'red' } }, [
                          e._v('pan_tool'),
                        ]),
                      ],
                      1
                    )
                : a(
                    'span',
                    [
                      e._v(
                        '\n    ' +
                          e._s(e.loalocale.self.tooltip.notSignYet) +
                          '\n    '
                      ),
                      a('v-icon', { attrs: { color: 'blue' } }, [e._v('help')]),
                    ],
                    1
                  ),
              e._v(' '),
              a('div', [
                e._v(
                  '\n    ' +
                    e._s(e.loalocale.self.tooltip.signingTime) +
                    '\n    '
                ),
                e.signingOfTheSigner
                  ? a('span', [
                      e._v(
                        e._s(
                          new Date(
                            e.signingOfTheSigner.signedDate
                          ).toLocaleString()
                        )
                      ),
                    ])
                  : a('span', [e._v('-')]),
              ]),
            ]);
          },
          staticRenderFns: [],
        };
      var Z = a('VU/8')(
          Q,
          X,
          !1,
          function (e) {
            a('Akt2');
          },
          null,
          null
        ).exports,
        ee = {
          name: 'SigningBlock',
          components: { 'signing-tooltip': Z },
          props: {
            small: { type: Boolean, default: !1 },
            employee: { type: Object },
            record: { type: Object },
          },
          data: function () {
            return {};
          },
          computed: {
            needToSign: function () {
              var e = this;
              return (
                !this.record.pass &&
                !this.sameAsCurrentUser &&
                this.record.signers.some(function (t) {
                  return t.username === e.loginuser.username;
                })
              );
            },
            sameAsCurrentUser: function () {
              return (
                this.loginuser.username.toLocaleLowerCase() ===
                this.employee.username.toLocaleLowerCase()
              );
            },
          },
          mounted: function () {},
          methods: {
            signLeave: function (e, t, a) {
              this.$emit('sign', e, t, a);
            },
            distinctSignings: function (e) {
              var t = [];
              return (
                e.forEach(function (e) {
                  t.some(function (t) {
                    return t.username === e.username;
                  }) || t.push(e);
                }),
                t
              );
            },
            generateSummary: J.generateSummary,
          },
        },
        te = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-list-tile',
              [
                e.small
                  ? e._e()
                  : a(
                      'v-list-tile-avatar',
                      [
                        a(
                          'v-icon',
                          { class: e.record.class, attrs: { riple: '' } },
                          [e._v(e._s(e.record.icon))]
                        ),
                      ],
                      1
                    ),
                e._v(' '),
                e.small
                  ? e._e()
                  : a(
                      'v-list-tile-content',
                      [
                        a('v-list-tile-title', [
                          e._v(
                            e._s(
                              e.loalocale.shared.leaveTypes[e.record.leaveType]
                                ? e.loalocale.shared.leaveTypes[
                                    e.record.leaveType
                                  ]
                                : e.record.leaveType
                            )
                          ),
                        ]),
                        e._v(' '),
                        a('v-list-tile-sub-title', [
                          e._v(
                            e._s(
                              e.generateSummary(
                                e.record.dates,
                                e.record.startFrom,
                                e.record.endTo
                              )
                            )
                          ),
                        ]),
                      ],
                      1
                    ),
                e._v(' '),
                e.needToSign
                  ? a('v-list-tile-action', [
                      a('small', [e._v(e._s(e.loalocale.self.label.sign))]),
                    ])
                  : e._e(),
                e._v(' '),
                e.needToSign
                  ? a(
                      'v-list-tile-action',
                      { staticClass: 'sign-btn' },
                      [
                        a(
                          'v-tooltip',
                          { attrs: { top: '' } },
                          [
                            a(
                              'v-btn',
                              {
                                attrs: {
                                  slot: 'activator',
                                  icon: '',
                                  ripple: '',
                                },
                                on: {
                                  click: function (t) {
                                    return e.signLeave(
                                      e.employee._id,
                                      e.record._id,
                                      !0
                                    );
                                  },
                                },
                                slot: 'activator',
                              },
                              [
                                a('v-icon', { attrs: { color: 'green' } }, [
                                  e._v('thumb_up'),
                                ]),
                              ],
                              1
                            ),
                            e._v(' '),
                            a('div', [
                              e._v(e._s(e.loalocale.self.tooltip.pass)),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : e._e(),
                e._v(' '),
                e.needToSign
                  ? a(
                      'v-list-tile-action',
                      { staticClass: 'sign-btn' },
                      [
                        a(
                          'v-tooltip',
                          { attrs: { top: '' } },
                          [
                            a(
                              'v-btn',
                              {
                                attrs: {
                                  slot: 'activator',
                                  icon: '',
                                  ripple: '',
                                },
                                on: {
                                  click: function (t) {
                                    return e.signLeave(
                                      e.employee._id,
                                      e.record._id,
                                      !1
                                    );
                                  },
                                },
                                slot: 'activator',
                              },
                              [
                                a('v-icon', { attrs: { color: 'red' } }, [
                                  e._v('pan_tool'),
                                ]),
                              ],
                              1
                            ),
                            e._v(' '),
                            a('div', [
                              e._v(e._s(e.loalocale.self.tooltip.reject)),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : e._e(),
                e._v(' '),
                a('v-list-tile-action', [
                  a('small', [e._v(e._s(e.loalocale.self.label.signed))]),
                ]),
                e._v(' '),
                a(
                  'v-list-tile-action',
                  [
                    a(
                      'v-tooltip',
                      { attrs: { bottom: '' } },
                      [
                        a('v-rating', {
                          attrs: {
                            slot: 'activator',
                            readonly: '',
                            value: e.distinctSignings(e.record.signings).length,
                            length: e.record.signers.length,
                            'empty-icon': 'check_box_outline_blank',
                            'full-icon': 'check_box',
                          },
                          slot: 'activator',
                        }),
                        e._v(' '),
                        e._l(e.record.signers, function (t) {
                          return a('signing-tooltip', {
                            key: t._id,
                            attrs: { signer: t, signings: e.record.signings },
                          });
                        }),
                      ],
                      2
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var ae = a('VU/8')(
          ee,
          te,
          !1,
          function (e) {
            a('Bwbz');
          },
          null,
          null
        ).exports,
        ne = {
          name: 'SystemNotification',
          props: { value: { type: Object } },
          created: function () {},
          computed: {
            iconType: function () {
              return {
                info: 'info',
                success: 'verified_user',
                warning: 'warning',
                error: 'error_outline',
              }[this.level];
            },
          },
          data: function () {
            return { snackbar: !1 };
          },
          methods: {
            close: function (e) {
              this.value.handler &&
                this.value.handler(this.$router, this.$cookie),
                this.$emit('close', e);
            },
          },
        },
        oe = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-snackbar',
              {
                attrs: {
                  color: e.value.level,
                  'multi-line': '',
                  vertical: '',
                  right: '',
                  top: '',
                  timeout: 0,
                  'auto-height': '',
                },
                model: {
                  value: e.value.visible,
                  callback: function (t) {
                    e.$set(e.value, 'visible', t);
                  },
                  expression: 'value.visible',
                },
              },
              [
                a(
                  'div',
                  [
                    a(
                      'h1',
                      { staticStyle: { 'font-size': '25px' } },
                      [
                        a('v-icon', { attrs: { large: '' } }, [
                          e._v(e._s(e.iconType)),
                        ]),
                        e._v(
                          '\n      ' +
                            e._s(
                              e.value.title
                                ? e.value.title
                                : e.loalocale.shared.title.systemNotification
                            ) +
                            '\n    '
                        ),
                      ],
                      1
                    ),
                    e._v(' '),
                    e._t('default'),
                  ],
                  2
                ),
                e._v(' '),
                a(
                  'v-btn',
                  {
                    attrs: { flat: '' },
                    on: {
                      click: function (t) {
                        return e.close(e.value.keyword);
                      },
                    },
                  },
                  [e._v(e._s(e.loalocale.self.btn.iGotIt))]
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var se = a('VU/8')(
          ne,
          oe,
          !1,
          function (e) {
            a('pbEp');
          },
          'data-v-23da37d2',
          null
        ).exports,
        re = {
          name: 'LeaveTypeRefreshedNotification',
          components: { 'system-notification': se },
          props: {
            leaveTypes: {
              type: Array,
              default: function () {
                return [];
              },
            },
            fullControl: { type: Boolean, default: !1 },
            value: { type: Boolean, default: !1 },
          },
          created: function () {},
          computed: {
            infos: function () {
              var e = this;
              return this.leaveTypes.map(function (t, a) {
                return {
                  index: a,
                  name: t.name,
                  localeName: e.loalocale.shared.leaveTypes[t.name],
                  deadline: J.formatDate(t.deadline),
                  totals: t.totals.days,
                  iconNClass: J.lookUpLeaveTypeIconNClass(t.name),
                };
              });
            },
            systemNotification: function () {
              return {
                level: 'info',
                title: this.loalocale.self.title,
                visible: this.value,
              };
            },
          },
          data: function () {
            return {};
          },
          methods: {
            close: function () {
              this.$emit('close');
            },
            stringFormat: J.stringFormat,
            isLeaveTypeInfoGeneral: J.isLeaveTypeInfoGeneral,
          },
        },
        le = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'system-notification',
              {
                on: { close: e.close },
                model: {
                  value: e.systemNotification,
                  callback: function (t) {
                    e.systemNotification = t;
                  },
                  expression: 'systemNotification',
                },
              },
              [
                a(
                  'tbody',
                  e._l(e.infos, function (t) {
                    return a('tr', { key: t.name }, [
                      a(
                        'td',
                        [
                          a(
                            'v-icon',
                            { class: [t.iconNClass.class, 'circle-icon'] },
                            [e._v(e._s(t.iconNClass.icon))]
                          ),
                        ],
                        1
                      ),
                      e._v(' '),
                      a('td', { staticClass: 'min-width-100' }, [
                        e._v(e._s(t.localeName)),
                      ]),
                      e._v(' '),
                      a('td', [
                        e.fullControl || e.isLeaveTypeInfoGeneral(t.name)
                          ? a('span', [
                              e._v(
                                e._s(
                                  e.stringFormat(
                                    e.loalocale.self.stringTemplate.totals,
                                    t.totals
                                  )
                                )
                              ),
                            ])
                          : e._e(),
                      ]),
                      e._v(' '),
                      a('td', [
                        e._v(
                          e._s(
                            e.stringFormat(
                              e.loalocale.self.stringTemplate.deadline,
                              t.deadline
                            )
                          )
                        ),
                      ]),
                    ]);
                  }),
                  0
                ),
              ]
            );
          },
          staticRenderFns: [],
        };
      var ie = a('VU/8')(
          re,
          le,
          !1,
          function (e) {
            a('x4EY');
          },
          'data-v-4e577acc',
          null
        ).exports,
        ce = {
          name: 'EmployeeInfo',
          props: {
            small: { type: Boolean, default: !1 },
            icon: { type: Boolean, default: !1 },
            email: { type: Boolean, default: !1 },
            profile: {
              type: Object,
              default: function () {
                return {
                  dept: 'Dept',
                  level: 'Level',
                  employeeID: 'ID000',
                  name: 'My Name',
                  username: 'My Username',
                  arrivedDate: 'now',
                  email: 'sample@email.com',
                };
              },
            },
          },
          data: function () {
            return {};
          },
          methods: { formatDate: J.formatDate },
        },
        ue = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a('v-tooltip', { attrs: { bottom: '' } }, [
              a('div', { attrs: { slot: 'activator' }, slot: 'activator' }, [
                a(
                  'div',
                  [
                    e.icon ? a('v-icon', [e._v('group')]) : e._e(),
                    e._v('\n      ' + e._s(e.profile.dept) + '\n      '),
                    e.icon ? a('v-icon', [e._v('security')]) : e._e(),
                    e._v('\n      ' + e._s(e.profile.level) + '\n    '),
                  ],
                  1
                ),
                e._v(' '),
                e.small
                  ? e._e()
                  : a(
                      'div',
                      [
                        e.icon ? a('v-icon', [e._v('star')]) : e._e(),
                        e._v(
                          '\n      ' + e._s(e.profile.employeeID) + '\n    '
                        ),
                      ],
                      1
                    ),
                e._v(' '),
                a(
                  'div',
                  [
                    e.icon ? a('v-icon', [e._v('person')]) : e._e(),
                    e._v(
                      '\n      ' +
                        e._s(e.profile.name) +
                        ' (' +
                        e._s(e.profile.username) +
                        ')\n    '
                    ),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'div',
                  [
                    e.icon ? a('v-icon', [e._v('event')]) : e._e(),
                    e._v(
                      '\n      ' +
                        e._s(e.formatDate(e.profile.arrivedDate)) +
                        '\n    '
                    ),
                  ],
                  1
                ),
                e._v(' '),
                !e.small && e.email
                  ? a(
                      'div',
                      [
                        e.icon ? a('v-icon', [e._v('email')]) : e._e(),
                        e._v('\n      ' + e._s(e.profile.email) + '\n    '),
                      ],
                      1
                    )
                  : e._e(),
              ]),
              e._v(' '),
              a('div', [
                a('div', [
                  e._v(
                    '\n      ' +
                      e._s(e.loalocale.self.dept) +
                      ':\n      ' +
                      e._s(e.profile.dept) +
                      '\n      ' +
                      e._s(e.loalocale.self.level) +
                      ':\n      ' +
                      e._s(e.profile.level) +
                      '\n    '
                  ),
                ]),
                e._v(' '),
                e.small
                  ? e._e()
                  : a('div', [
                      e._v(
                        '\n      ' +
                          e._s(e.loalocale.self.employeeID) +
                          ':\n      ' +
                          e._s(e.profile.employeeID) +
                          '\n    '
                      ),
                    ]),
                e._v(' '),
                a('div', [
                  e._v(
                    '\n      ' +
                      e._s(e.loalocale.self.name) +
                      ' (' +
                      e._s(e.loalocale.self.username) +
                      '):\n      ' +
                      e._s(e.profile.name) +
                      ' (' +
                      e._s(e.profile.username) +
                      ')\n    '
                  ),
                ]),
                e._v(' '),
                a('div', [
                  e._v(
                    '\n      ' +
                      e._s(e.loalocale.self.arrivedDate) +
                      ':\n      ' +
                      e._s(e.formatDate(e.profile.arrivedDate)) +
                      '\n    '
                  ),
                ]),
                e._v(' '),
                !e.small && e.email
                  ? a('div', [
                      e._v(
                        '\n      ' +
                          e._s(e.loalocale.self.email) +
                          ':\n      ' +
                          e._s(e.profile.email) +
                          '\n    '
                      ),
                    ])
                  : e._e(),
              ]),
            ]);
          },
          staticRenderFns: [],
        };
      var de,
        pe = a('VU/8')(
          ce,
          ue,
          !1,
          function (e) {
            a('Z3gK');
          },
          null,
          null
        ).exports,
        fe = a('Dd8w'),
        ve = a.n(fe),
        me = { API_URL: '/LOASystem/LOASystem/static/api/', dev: !1 },
        he =
          ((de = v()(
            u.a.mark(function e(t) {
              var a, n, o;
              return u.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = new URL(
                            me.API_URL + t,
                            location.origin
                          )).pathname.endsWith('.json') ||
                            (a.pathname.endsWith('/') &&
                              (a.pathname = a.pathname.slice(
                                0,
                                a.pathname.length - 1
                              )),
                            (a.pathname += '.json')),
                          (e.next = 4),
                          fetch(a.href)
                        );
                      case 4:
                        return (n = e.sent), (e.next = 7), n.json();
                      case 7:
                        return (
                          (o = e.sent),
                          e.abrupt('return', {
                            data: ve()({ success: !0 }, o, {
                              message: '',
                              logs: '',
                            }),
                          })
                        );
                      case 9:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          )),
          function (e) {
            return de.apply(this, arguments);
          }),
        ye = function () {
          return {
            get: function (e) {
              return he(e);
            },
            post: function (e) {
              return he(e);
            },
            patch: function (e) {
              return he(e);
            },
            put: function (e) {
              return he(e);
            },
            delete: function (e) {
              return he(e);
            },
          };
        },
        ge = function (e) {
          var t =
            'annual/report/' +
            e.year +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().get(t);
        },
        _e = function (e) {
          var t =
            'monthly/report/' +
            e.year +
            '/' +
            e.month +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().get(t);
        },
        xe = function (e) {
          var t =
            'monthly/' +
            (e.sdehsra ? 'sdehsra/' : '') +
            e.year +
            '/' +
            e.month +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().get(t);
        },
        be = function (e) {
          return ye().post('auth', e);
        },
        ke = function (e) {
          var t =
            'employees/' + e.loginuser + '/' + encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().get(t);
        },
        we = function (e) {
          var t =
            'employees/lightweight/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().get(t);
        },
        De = function (e) {
          var t = 'employee/' + e.loginuser + '/' + encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().post(t, e);
        },
        Te = function (e) {
          var t =
            'employee/' +
            e.id +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().put(t, e);
        },
        Ce = function (e) {
          var t =
            'employee/loa/' +
            e.id +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().put(t, e);
        },
        Fe = function (e) {
          var t =
            'employee/pwd/' +
            e.id +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().put(t, e);
        },
        Ee = function (e) {
          var t =
            'employee/email/' +
            e.id +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().put(t, e);
        },
        Le = function (e) {
          var t =
            'employee/sign/' +
            e.id +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().put(t, e);
        },
        Ie = function (e) {
          var t =
            'employee/' +
            e.id +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().get(t);
        },
        Re = function (e) {
          var t =
            'employee/' +
            e.id +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().delete(t);
        },
        Ae = function (e) {
          var t =
            'toggle/' +
            e.id +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().put(t);
        },
        Se = function (e) {
          var t =
            'employees/compensatory/' +
            e.year +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().get(t);
        },
        $e = function (e) {
          var t =
            'db/restore/' + e.loginuser + '/' + encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().get(t);
        },
        Ue = function (e) {
          var t = 'db/check/' + e.loginuser + '/' + encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().get(t);
        },
        Oe = function (e) {
          var t =
            'shift/' +
            e.year +
            '/' +
            e.month +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().get(t);
        },
        Ne = function (e) {
          var t =
            'shift/' +
            (e.shiftId ? 'delete' : 'new') +
            '/' +
            e.id +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().post(t, e);
        },
        Be = function (e) {
          var t =
            'shift/config/' +
            e.type +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().get(t);
        },
        He = function (e) {
          var t =
            'holiday/' +
            e.year +
            '/' +
            e.month +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().get(t);
        },
        Me = function (e) {
          var t =
            'shift/config/' +
            e.type +
            '/' +
            e.loginuser +
            '/' +
            encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().put(t, e);
        },
        Pe = function (e) {
          var t =
            'annualinfo/' + e.loginuser + '/' + encodeURIComponent(e.token);
          return je(me.API_URL + '/' + t), ye().patch(t, e);
        },
        ze = {
          exportReport: function (e) {
            var t = void 0;
            return (
              'annual' === e.period
                ? (t =
                    me.API_URL +
                    '/' +
                    e.period +
                    '/export/report/' +
                    e.year +
                    '/' +
                    e.loginuser +
                    '/' +
                    encodeURIComponent(e.token))
                : 'monthly' === e.period &&
                  (t =
                    me.API_URL +
                    '/' +
                    e.period +
                    '/export/report/' +
                    e.year +
                    '/' +
                    e.month +
                    '/' +
                    e.loginuser +
                    '/' +
                    encodeURIComponent(e.token)),
              je(t),
              t
            );
          },
          exportShift: function (e) {
            var t;
            return (
              je(
                (t =
                  me.API_URL +
                  '/shift/export/' +
                  e.year +
                  '/' +
                  e.month +
                  '/' +
                  e.loginuser +
                  '/' +
                  encodeURIComponent(e.token))
              ),
              t
            );
          },
          exportEmployee: function (e) {
            var t;
            return (
              je(
                (t =
                  me.API_URL +
                  '/employee/export/' +
                  e.year +
                  '/' +
                  e.username +
                  '/' +
                  e.loginuser +
                  '/' +
                  encodeURIComponent(e.token))
              ),
              t
            );
          },
          exportCompensatory: function (e) {
            var t;
            return (
              je(
                (t =
                  me.API_URL +
                  '/compensatory/export/' +
                  e.year +
                  '/' +
                  e.loginuser +
                  '/' +
                  encodeURIComponent(e.token))
              ),
              t
            );
          },
          dbbackup: function (e) {
            var t =
              me.API_URL +
              '/db/backup/' +
              e.loginuser +
              '/' +
              encodeURIComponent(e.token);
            return je(t), t;
          },
        };
      function je(e) {
        me.dev && console.log(e);
      }
      var Ye = {
          name: 'EmployeeAccountSettings',
          props: {
            account: {
              type: Object,
              default: function () {
                return { email: '', password: '', id: '' };
              },
            },
            addingNew: { type: Boolean, default: !1 },
          },
          data: function () {
            return { dialog: { password: !1, email: !1 }, showPWD: !1 };
          },
          methods: {
            resetEmail: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Ee({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                id: e.account.id,
                                email: e.account.email,
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data),
                              (o = n.success),
                              (s = n.message),
                              e.$emit('reset:email', o, s);
                          case 7:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            resetPWD: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Fe({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                id: e.account.id,
                                password: e.account.password,
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data),
                              (o = n.success),
                              (s = n.message),
                              e.$emit('reset:password', o, s);
                          case 7:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
          },
        },
        Ge = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-layout',
              { attrs: { row: '', wrap: '' } },
              [
                a(
                  'v-flex',
                  { attrs: { xs2: '' } },
                  [
                    a(
                      'v-dialog',
                      {
                        attrs: { 'max-width': '400px' },
                        model: {
                          value: e.dialog.password,
                          callback: function (t) {
                            e.$set(e.dialog, 'password', t);
                          },
                          expression: 'dialog.password',
                        },
                      },
                      [
                        a(
                          'v-tooltip',
                          {
                            attrs: { slot: 'activator', bottom: '' },
                            slot: 'activator',
                          },
                          [
                            a(
                              'v-btn',
                              {
                                attrs: {
                                  slot: 'activator',
                                  icon: '',
                                  color: 'primary',
                                },
                                slot: 'activator',
                              },
                              [a('v-icon', [e._v('lock')])],
                              1
                            ),
                            e._v(
                              '\n        ' +
                                e._s(e.loalocale.self.reset) +
                                ' ' +
                                e._s(e.loalocale.self.password) +
                                '\n      '
                            ),
                          ],
                          1
                        ),
                        e._v(' '),
                        a(
                          'v-card',
                          [
                            a('v-card-title', { staticClass: 'theme' }, [
                              a('span', { staticClass: 'headline' }, [
                                e._v(
                                  e._s(e.loalocale.self.reset) +
                                    ' ' +
                                    e._s(e.loalocale.self.password)
                                ),
                              ]),
                            ]),
                            e._v(' '),
                            a(
                              'v-card-text',
                              [
                                a('v-text-field', {
                                  attrs: {
                                    'append-icon': e.showPWD
                                      ? 'visibility_off'
                                      : 'visibility',
                                    'prepend-icon': 'lock',
                                    name: 'password',
                                    label: e.loalocale.self.password,
                                    type: e.showPWD ? 'text' : 'password',
                                  },
                                  on: {
                                    'click:append': function (t) {
                                      e.showPWD = !e.showPWD;
                                    },
                                  },
                                  model: {
                                    value: e.account.password,
                                    callback: function (t) {
                                      e.$set(e.account, 'password', t);
                                    },
                                    expression: 'account.password',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-card-actions',
                              [
                                a('v-spacer'),
                                e._v(' '),
                                a(
                                  'v-btn',
                                  {
                                    attrs: { flat: '' },
                                    on: {
                                      click: function (t) {
                                        e.dialog.password = !1;
                                      },
                                    },
                                  },
                                  [e._v(e._s(e.loalocale.self.close))]
                                ),
                                e._v(' '),
                                a(
                                  'v-btn',
                                  {
                                    staticClass: 'theme',
                                    attrs: { flat: '' },
                                    on: { click: e.resetPWD },
                                  },
                                  [e._v(e._s(e.loalocale.self.reset))]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-flex',
                  { attrs: { xs2: '' } },
                  [
                    a(
                      'v-dialog',
                      {
                        attrs: { 'max-width': '400px' },
                        model: {
                          value: e.dialog.email,
                          callback: function (t) {
                            e.$set(e.dialog, 'email', t);
                          },
                          expression: 'dialog.email',
                        },
                      },
                      [
                        a(
                          'v-tooltip',
                          {
                            attrs: { slot: 'activator', bottom: '' },
                            slot: 'activator',
                          },
                          [
                            a(
                              'v-btn',
                              {
                                attrs: {
                                  slot: 'activator',
                                  icon: '',
                                  color: 'primary',
                                },
                                slot: 'activator',
                              },
                              [a('v-icon', [e._v('email')])],
                              1
                            ),
                            e._v(
                              '\n        ' +
                                e._s(e.loalocale.self.reset) +
                                ' ' +
                                e._s(e.loalocale.self.email) +
                                '\n      '
                            ),
                          ],
                          1
                        ),
                        e._v(' '),
                        a(
                          'v-card',
                          [
                            a('v-card-title', { staticClass: 'theme' }, [
                              a('span', { staticClass: 'headline' }, [
                                e._v(
                                  e._s(e.loalocale.self.reset) +
                                    ' ' +
                                    e._s(e.loalocale.self.email)
                                ),
                              ]),
                            ]),
                            e._v(' '),
                            a(
                              'v-card-text',
                              [
                                a('v-text-field', {
                                  attrs: {
                                    'prepend-icon': 'email',
                                    type: 'email',
                                    label: 'Email',
                                    rules: [
                                      function (t) {
                                        return (
                                          !t ||
                                          /.+@.+/.test(t) ||
                                          e.loalocale.self.invalidEmail
                                        );
                                      },
                                    ],
                                  },
                                  model: {
                                    value: e.account.email,
                                    callback: function (t) {
                                      e.$set(e.account, 'email', t);
                                    },
                                    expression: 'account.email',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-card-actions',
                              [
                                a('v-spacer'),
                                e._v(' '),
                                a(
                                  'v-btn',
                                  {
                                    attrs: { flat: '' },
                                    on: {
                                      click: function (t) {
                                        e.dialog.email = !1;
                                      },
                                    },
                                  },
                                  [e._v(e._s(e.loalocale.self.close))]
                                ),
                                e._v(' '),
                                a(
                                  'v-btn',
                                  {
                                    staticClass: 'theme',
                                    attrs: { flat: '' },
                                    on: { click: e.resetEmail },
                                  },
                                  [e._v(e._s(e.loalocale.self.reset))]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var Ve = a('VU/8')(
          Ye,
          Ge,
          !1,
          function (e) {
            a('V9PV');
          },
          null,
          null
        ).exports,
        We = {
          name: 'DatabaseManagement',
          props: {},
          data: function () {
            return { dialog: !1, content: '' };
          },
          mounted: function () {
            this.check();
          },
          methods: {
            backup: function () {
              var e = ze.dbbackup({
                  loginuser: this.loginuser.username,
                  token: this.loginuser.token,
                }),
                t = document.createElement('iframe');
              (t.style = 'display:none'),
                document.body.appendChild(t),
                (t.src = e);
            },
            restore: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              $e({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data),
                              (o = n.success),
                              (s = n.message),
                              e.$emit('dbrestore', o, s);
                          case 7:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            check: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s, r;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Ue({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data),
                              (o = n.success),
                              (s = n.message),
                              (r = n.content),
                              (e.content = r),
                              e.$emit('dbcheck', o, s, r);
                          case 9:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
          },
          watch: {
            dialog: function (e) {
              e && this.check();
            },
          },
        },
        qe = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-dialog',
              {
                attrs: { 'max-width': '350', persistent: '' },
                model: {
                  value: e.dialog,
                  callback: function (t) {
                    e.dialog = t;
                  },
                  expression: 'dialog',
                },
              },
              [
                a(
                  'v-btn',
                  { attrs: { slot: 'activator', icon: '' }, slot: 'activator' },
                  [
                    a('v-icon', { attrs: { color: 'warning' } }, [
                      e._v('storage'),
                    ]),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-card',
                  [
                    a('v-card-title', { staticClass: 'theme' }, [
                      a('span', { staticClass: 'headline' }, [
                        e._v('資料庫管理'),
                      ]),
                    ]),
                    e._v(' '),
                    a('v-card-text', [e._v('上次備份: ' + e._s(e.content))]),
                    e._v(' '),
                    a(
                      'v-card-actions',
                      [
                        a('v-spacer'),
                        e._v(' '),
                        a(
                          'v-btn',
                          {
                            attrs: { flat: '' },
                            on: {
                              click: function (t) {
                                e.dialog = !1;
                              },
                            },
                          },
                          [e._v('關閉')]
                        ),
                        e._v(' '),
                        a(
                          'v-btn',
                          {
                            staticClass: 'theme',
                            attrs: { flat: '' },
                            on: { click: e.backup },
                          },
                          [e._v('備份')]
                        ),
                        e._v(' '),
                        a(
                          'v-btn',
                          {
                            staticClass: 'theme',
                            attrs: { flat: '' },
                            on: { click: e.restore },
                          },
                          [e._v('還原')]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var Ke = a('VU/8')(
          We,
          qe,
          !1,
          function (e) {
            a('hCUW');
          },
          null,
          null
        ).exports,
        Je = {
          basicHeaders: [
            { text: q.List.employeeID, value: 'employeeID', sortable: !1 },
            { text: q.List.name, value: 'name', sortable: !1 },
            { text: q.List.username, value: 'username', sortable: !1 },
          ],
          leaveTypeHeaders: [
            { text: q.Report.th.annual, value: 'annual', sortable: !1 },
            {
              text: q.Report.th.compensatory,
              value: 'compensatory',
              sortable: !1,
            },
            { text: q.Report.th.statutory, value: 'statutory', sortable: !1 },
            { text: q.Report.th.marriage, value: 'marriage', sortable: !1 },
            { text: q.Report.th.funeral, value: 'funeral', sortable: !1 },
            { text: q.Report.th.menstrual, value: 'menstrual', sortable: !1 },
            { text: q.Report.th.sick, value: 'sick', sortable: !1 },
            { text: q.Report.th.personal, value: 'personal', sortable: !1 },
            {
              text: q.Report.th.derelictionOfDuty,
              value: 'derelictionOfDuty',
              sortable: !1,
            },
            { text: q.Report.th.late, value: 'late', sortable: !1 },
            { text: q.Report.th.familyCare, value: 'familyCare', sortable: !1 },
            {
              text: q.Report.th.preManternity,
              value: 'preManternity',
              sortable: !1,
            },
            {
              text: q.Report.th.manternityMiscarriage,
              value: 'manternityMiscarriage',
              sortable: !1,
            },
            {
              text: q.Report.th.accompanyingManternity,
              value: 'accompanyingManternity',
              sortable: !1,
            },
            {
              text: q.Report.th.businessTrip,
              value: 'businessTrip',
              sortable: !1,
            },
            { text: q.Report.th.others, value: 'others', sortable: !1 },
          ],
          annualInfoHeaders: [
            {
              text: q.Report.th.annualRemainings,
              value: 'annualInfo',
              sortable: !1,
            },
            {
              text: q.Report.th.annualDeadline,
              value: 'annualInfo',
              sortable: !1,
            },
          ],
          generateColumns: function (e, t) {
            if ('day' === e) {
              var a = t,
                n = new Date(new Date().getFullYear(), a, 0).getDate();
              return Array.apply(null, { length: n })
                .map(function (e, t) {
                  return t + 1;
                })
                .map(function (e) {
                  return {
                    text:
                      a +
                      ' ' +
                      q.Report.th.months +
                      ' ' +
                      e +
                      ' ' +
                      q.Report.th.days,
                    value: 'day' + e,
                    sortable: !1,
                  };
                });
            }
            if ('month' === e) {
              var o = t;
              return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (e) {
                return {
                  text:
                    o +
                    ' ' +
                    q.Report.th.years +
                    ' ' +
                    e +
                    ' ' +
                    q.Report.th.months,
                  value: 'month' + e,
                  sortable: !1,
                };
              });
            }
            return [];
          },
          parseDateString: function (e) {
            return e
              ? {
                  year: parseInt(e.substr(0, 4)),
                  month: parseInt(e.substr(5, 2)),
                  day: parseInt(e.substr(8, 2)),
                  date: new Date(e),
                }
              : void 0;
          },
          leaveTypes: [
            'annual',
            'compensatory',
            'marriage',
            'funeral',
            'menstrual',
            'sick',
            'personal',
            'familyCare',
            'preManternity',
            'manternityMiscarriage',
            'accompanyingManternity',
            'businessTrip',
            'others',
          ],
          createObjectByKeys: function (e, t) {
            var a = {};
            return (
              e.forEach(function (e) {
                a[e] = t;
              }),
              a
            );
          },
          sumUpDaysNHours: function (e, t, a) {
            var n =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 1,
              o = { days: e, hours: t };
            return (
              a > 0
                ? ((o.hours += a / 2),
                  o.hours >= 8 &&
                    ((o.days = Math.floor(o.hours / 8)),
                    (o.hours = o.hours % 8)))
                : (o.days += n),
              o
            );
          },
          sumTotalDaysNHours: function (e, t, a, n) {
            var o = { days: e, hours: t };
            return (
              (o.days += a),
              (o.hours += n),
              o.hours >= 8 &&
                ((o.days = Math.floor(o.hours / 8)), (o.hours = o.hours % 8)),
              o
            );
          },
          checkingSigned: function (e) {
            var t = e.signers.every(function (t) {
              return e.signings.some(function (e) {
                return e.id === t.id;
              });
            });
            return e.signings.length > 0
              ? e.signings.every(function (e) {
                  return e.pass;
                }) && t
              : t;
          },
          generateleaveTypeSummary: function (e) {
            var t = e.days,
              a = e.hours,
              n = e.totalDays,
              o = e.totalHours;
            return n || o
              ? t +
                  q.shared.common.dayUnit +
                  (a && a > 0 ? ' ' + a + q.shared.common.hourUnit : '') +
                  '/' +
                  n +
                  q.shared.common.dayUnit +
                  (o ? ' ' + o + q.shared.common.hourUnit : '')
              : (t ? t + q.shared.common.days : '') +
                  (a && a > 0 ? a + q.shared.common.hourUnit : '');
          },
          generateSummary: function (e) {
            var t = e.leaveType,
              a = e.days,
              n = e.hours;
            return (
              (q.Report.th[t] ? q.Report.th[t] : t) +
              ' ' +
              (a > 0 ? a + ' ' + q.Report.th.days : '') +
              (n > 0 ? n + ' ' + q.Report.th.hours : '')
            );
          },
          generateleaveTypeClass: function (e) {
            var t = K.leaveTypes.find(function (t) {
              return t.name === e;
            });
            return t ? t.class : K.customLeaveType.class;
          },
          getRecordsWithinThisYear: function (e, t) {
            var a = [];
            return (
              e.forEach(function (e) {
                e.dates.map(Je.parseDateString).some(function (e) {
                  return e && e.year === t;
                }) && a.push(e);
              }),
              a
            );
          },
          groupRecordsByMonth: function (e) {
            var t = Array.apply(null, { length: 12 }).map(function (e, t) {
              return [];
            });
            return (
              e.forEach(function (e) {
                e.dates.map(Je.parseDateString).forEach(function (a) {
                  t[a.month - 1].find(function (t) {
                    return t._id === e._id;
                  }) || t[a.month - 1].push(e);
                });
              }),
              t
            );
          },
          groupRecordsByLeaveType: function (e) {
            var t = [];
            return (
              e.forEach(function (e) {
                var a = t.find(function (t) {
                  return t.key === e.leaveType;
                });
                a ? a.list.push(e) : t.push({ key: e.leaveType, list: [e] });
              }),
              t
            );
          },
          calculateTotals: function (e) {
            return Je.sumUpTotals(
              e.map(function (e) {
                return e.totals;
              })
            );
          },
          sumUpTotals: function (e) {
            var t = { days: 0, hours: 0 };
            return (
              e.forEach(function (e) {
                var a = e.days,
                  n = e.halfHours;
                n > 0
                  ? ((t.hours += n / 2),
                    t.hours >= 8 &&
                      ((t.days += Math.floor(t.hours / 8)),
                      (t.hours = t.hours % 8)))
                  : (t.days += a);
              }),
              t
            );
          },
        },
        Qe = {
          name: 'AnnualInfoManagement',
          props: {},
          data: function () {
            return { dialog: !1, employees: [] };
          },
          computed: {
            allSelected: function () {
              return this.employees.every(function (e) {
                return e.selected;
              });
            },
          },
          mounted: function () {
            this.getEmployees();
          },
          methods: {
            toggleSelectAll: function () {
              var e = !this.allSelected;
              this.employees.forEach(function (t) {
                t.selected = e;
              });
            },
            update: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Pe({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                usernames: e.employees
                                  .filter(function (e) {
                                    return e.selected;
                                  })
                                  .map(function (e) {
                                    return e.username;
                                  }),
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data),
                              (o = n.success),
                              (s = n.message),
                              o && e.getEmployees(),
                              e.$emit('update', o, s);
                          case 8:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            getEmployees: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              we({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data.employees) &&
                                (e.employees = n
                                  .filter(function (e) {
                                    return e.enabled;
                                  })
                                  .map(function (t) {
                                    return ve()({}, t, {
                                      annualInfo: ve()({}, t.annualInfo, {
                                        deadline: e.formatDate(
                                          t.annualInfo.deadline
                                        ),
                                      }),
                                      nextAnnualInfo: ve()(
                                        {},
                                        t.nextAnnualInfo,
                                        {
                                          deadline: e.formatDate(
                                            t.nextAnnualInfo.deadline
                                          ),
                                        }
                                      ),
                                      selected: !1,
                                    });
                                  })
                                  .map(function (e) {
                                    return ve()({}, e, { backup: p()({}, e) });
                                  }));
                          case 5:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            formatDate: J.formatDate,
            generateleaveTypeSummary: function (e) {
              return Je.generateleaveTypeSummary({
                days: e.consumes.days,
                hours: e.consumes.halfHours / 2,
                totalDays: e.totals.days,
                totalHours: e.totals.halfHours / 2,
              });
            },
          },
          watch: {
            dialog: function (e) {
              e && this.getEmployees();
            },
          },
        },
        Xe = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-dialog',
              {
                attrs: { 'max-width': '600', scrollable: '', persistent: '' },
                model: {
                  value: e.dialog,
                  callback: function (t) {
                    e.dialog = t;
                  },
                  expression: 'dialog',
                },
              },
              [
                a(
                  'v-btn',
                  { attrs: { slot: 'activator', icon: '' }, slot: 'activator' },
                  [
                    a('v-icon', { attrs: { color: 'warning' } }, [
                      e._v('local_airport'),
                    ]),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-card',
                  { staticClass: 'annualinfo-management' },
                  [
                    a('v-card-title', { staticClass: 'theme' }, [
                      a('div', { staticClass: 'headline' }, [
                        e._v('員工特別休假管理'),
                      ]),
                    ]),
                    e._v(' '),
                    a('v-card-title', { staticClass: 'header' }, [
                      a(
                        'div',
                        {
                          staticClass: 'action',
                          on: { click: e.toggleSelectAll },
                        },
                        [
                          a('div', { staticClass: 'select-action-label' }, [
                            e._v('全選'),
                          ]),
                          e._v(' '),
                          a('v-checkbox', {
                            staticClass: 'select-action',
                            attrs: { value: e.allSelected },
                          }),
                        ],
                        1
                      ),
                      e._v(' '),
                      a('div', { staticClass: 'user-info' }, [
                        a('div', [e._v('員工姓名')]),
                        e._v(' '),
                        a('div', { staticClass: 'sub-title' }, [
                          e._v('英文名'),
                        ]),
                      ]),
                      e._v(' '),
                      a('div', { staticClass: 'status-info' }, [
                        a('div', { staticClass: 'sub-title' }, [
                          e._v('到期日'),
                        ]),
                        e._v(' '),
                        a('div', [e._v('已用天數/總天數')]),
                      ]),
                    ]),
                    e._v(' '),
                    a(
                      'v-card-text',
                      [
                        a(
                          'v-list',
                          { attrs: { 'two-line': '' } },
                          [
                            e._l(e.employees, function (t, n) {
                              return [
                                a(
                                  'v-list-tile',
                                  { key: t._id },
                                  [
                                    a(
                                      'v-list-tile-action',
                                      [
                                        a('v-checkbox', {
                                          model: {
                                            value: t.selected,
                                            callback: function (a) {
                                              e.$set(t, 'selected', a);
                                            },
                                            expression: 'employee.selected',
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(' '),
                                    a(
                                      'v-list-tile-content',
                                      [
                                        a('v-list-tile-title', [
                                          e._v(e._s(t.name)),
                                        ]),
                                        e._v(' '),
                                        a('v-list-tile-sub-title', [
                                          e._v(e._s(t.username)),
                                        ]),
                                      ],
                                      1
                                    ),
                                    e._v(' '),
                                    a(
                                      'v-list-tile-action',
                                      { staticClass: 'status' },
                                      [
                                        a('v-list-tile-action-text', [
                                          e._v(e._s(t.annualInfo.deadline)),
                                        ]),
                                        e._v(
                                          '\n              ' +
                                            e._s(
                                              e.generateleaveTypeSummary(
                                                t.annualInfo
                                              )
                                            ) +
                                            '\n            '
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(' '),
                                    t.isAnnualLTRefreshable
                                      ? a(
                                          'v-list-tile-action',
                                          [
                                            a('v-icon', [
                                              e._v('arrow_forward'),
                                            ]),
                                          ],
                                          1
                                        )
                                      : e._e(),
                                    e._v(' '),
                                    t.isAnnualLTRefreshable
                                      ? a(
                                          'v-list-tile-action',
                                          { staticClass: 'status' },
                                          [
                                            a('v-list-tile-action-text', [
                                              e._v(
                                                e._s(t.nextAnnualInfo.deadline)
                                              ),
                                            ]),
                                            e._v(
                                              '\n              ' +
                                                e._s(
                                                  e.generateleaveTypeSummary(
                                                    t.nextAnnualInfo
                                                  )
                                                ) +
                                                '\n            '
                                            ),
                                          ],
                                          1
                                        )
                                      : e._e(),
                                  ],
                                  1
                                ),
                                e._v(' '),
                                a('v-divider', { key: n + '-divider' }),
                              ];
                            }),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-card-actions',
                      [
                        a('v-spacer'),
                        e._v(' '),
                        a(
                          'v-btn',
                          {
                            attrs: { flat: '' },
                            on: {
                              click: function (t) {
                                e.dialog = !1;
                              },
                            },
                          },
                          [e._v('關閉')]
                        ),
                        e._v(' '),
                        a(
                          'v-btn',
                          {
                            class: {
                              theme: e.employees.some(function (e) {
                                return e.selected;
                              }),
                            },
                            attrs: {
                              disabled: !e.employees.some(function (e) {
                                return e.selected;
                              }),
                            },
                            on: { click: e.update },
                          },
                          [e._v('更新')]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var Ze = {
          name: 'NavDrawer',
          components: {
            'employee-info': pe,
            'employee-account-settings': Ve,
            'database-management': Ke,
            'annualinfo-management': a('VU/8')(
              Qe,
              Xe,
              !1,
              function (e) {
                a('iBKl');
              },
              null,
              null
            ).exports,
          },
          props: {
            icon: { type: String, default: '' },
            title: { type: String, default: '' },
          },
          data: function () {
            return {
              mini: !0,
              dialog: !1,
              config: me,
              menu: [],
              account: { password: '', email: '', id: '' },
            };
          },
          mounted: function () {
            var e = this;
            (this.account.email = this.loginuser.email),
              (this.account.id = this.loginuser._id),
              (this.menu = [
                {
                  list: [
                    { title: this.loalocale.self.common, header: !0 },
                    {
                      title: this.loalocale.self.leaveCalendar,
                      icon: 'event_note',
                      action: function () {
                        return e.$router.push({ name: 'LeaveCalendar' });
                      },
                    },
                    {
                      title: this.loalocale.self.employees,
                      icon: 'view_list',
                      action: function () {
                        return e.$router.push({ name: 'List' });
                      },
                    },
                    {
                      title: this.loalocale.self.compensatory,
                      icon: 'event_available',
                      action: function () {
                        return e.$router.push({ name: 'CompensatoryList' });
                      },
                    },
                    { title: this.loalocale.self.report, header: !0 },
                    {
                      title: this.loalocale.self.annualReport,
                      icon: 'view_quilt',
                      action: function () {
                        return e.$router.push({ name: 'AnnualReport' });
                      },
                    },
                    {
                      title: this.loalocale.self.monthlyReport,
                      icon: 'view_quilt',
                      action: function () {
                        return e.$router.push({ name: 'MonthlyReport' });
                      },
                    },
                    { title: this.loalocale.self.others, header: !0 },
                    {
                      title: this.loalocale.self.shiftCalendar,
                      icon: 'schedule',
                      action: function () {
                        return e.$router.push({ name: 'ShiftCalendar' });
                      },
                    },
                  ],
                },
              ]);
          },
          methods: {
            logout: function (e, t) {
              e.delete('loasystem.loginuser'), t.push({ name: 'Login' });
            },
            resetPWD: function (e, t) {
              var a = this;
              this.$emit('notified', {
                text: J.lookUpCustomMessage(t, this.loalocale.self.message),
                level: e ? 'info' : 'warning',
                visible: !0,
                handler: function (t, n) {
                  e && a.logout(n, t);
                },
              });
            },
            update: function (e, t) {
              this.$emit('notified', {
                text: J.lookUpCustomMessage(t, this.loalocale.self.message),
                level: e ? 'info' : 'warning',
                visible: !0,
                handler: function (t, a) {
                  e && location.reload();
                },
              });
            },
            resetEmail: function (e, t) {
              this.$emit('notified', {
                text: J.lookUpCustomMessage(t, this.loalocale.self.message),
                level: e ? 'info' : 'warning',
                visible: !0,
              });
            },
            dbbackup: function (e, t) {},
            dbrestore: function (e, t) {
              var a = this;
              this.$emit('notified', {
                text: J.lookUpCustomMessage(t, this.loalocale.self.message),
                level: e ? 'info' : 'warning',
                visible: !0,
                handler: function (t, n) {
                  e && a.logout(n, t);
                },
              });
            },
          },
        },
        et = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'div',
              [
                a(
                  'v-navigation-drawer',
                  {
                    attrs: {
                      'mini-variant': e.mini,
                      fixed: '',
                      app: '',
                      right: '',
                    },
                  },
                  [
                    a(
                      'v-card',
                      [
                        a(
                          'v-img',
                          {
                            staticClass: 'white--text',
                            attrs: {
                              height: '200px',
                              src:
                                '/LOASystem/static/avatar/' +
                                e.loginuser.username +
                                '.png',
                            },
                          },
                          [
                            a(
                              'v-btn',
                              {
                                staticClass: 'nav-expander',
                                attrs: { icon: '' },
                                on: {
                                  click: function (t) {
                                    t.stopPropagation(), (e.mini = !e.mini);
                                  },
                                },
                              },
                              [
                                a('v-icon', [
                                  e._v(
                                    e._s(
                                      e.mini ? 'chevron_left' : 'chevron_right'
                                    )
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(' '),
                        e.mini
                          ? e._e()
                          : a(
                              'v-card-title',
                              [
                                a('employee-info', {
                                  attrs: {
                                    profile: e.loginuser,
                                    small: '',
                                    icon: '',
                                  },
                                }),
                                e._v(' '),
                                a('employee-account-settings', {
                                  attrs: { account: e.account },
                                  on: {
                                    'reset:email': e.resetEmail,
                                    'reset:password': e.resetPWD,
                                  },
                                }),
                              ],
                              1
                            ),
                      ],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-list',
                      { attrs: { dense: '' } },
                      [
                        e._l(e.menu, function (t, n) {
                          return [
                            e._l(t.list, function (t, o) {
                              return [
                                t.header
                                  ? a(
                                      'v-subheader',
                                      { key: 'header_' + n + '_' + o },
                                      [e._v(e._s(t.title))]
                                    )
                                  : a(
                                      'v-list-tile',
                                      {
                                        key: 'list-tile_' + n + '_' + o,
                                        class: { active: t.title === e.title },
                                        on: { click: t.action },
                                      },
                                      [
                                        a(
                                          'v-tooltip',
                                          { attrs: { left: '' } },
                                          [
                                            a(
                                              'v-list-tile-action',
                                              {
                                                attrs: { slot: 'activator' },
                                                slot: 'activator',
                                              },
                                              [
                                                a('v-icon', [
                                                  e._v(e._s(t.icon)),
                                                ]),
                                              ],
                                              1
                                            ),
                                            e._v(
                                              '\n              ' +
                                                e._s(t.title) +
                                                '\n            '
                                            ),
                                          ],
                                          1
                                        ),
                                        e._v(' '),
                                        a(
                                          'v-list-tile-content',
                                          [
                                            a('v-list-tile-title', [
                                              e._v(e._s(t.title)),
                                            ]),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                              ];
                            }),
                          ];
                        }),
                      ],
                      2
                    ),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-toolbar',
                  {
                    attrs: {
                      color: 'theme',
                      dark: '',
                      fixed: '',
                      app: '',
                      height: '40',
                    },
                  },
                  [
                    a(
                      'v-toolbar-title',
                      [
                        a(
                          'v-tooltip',
                          { attrs: { bottom: '' } },
                          [
                            a(
                              'v-toolbar-title',
                              {
                                attrs: { slot: 'activator' },
                                slot: 'activator',
                              },
                              [
                                a('v-icon', { attrs: { color: 'white' } }, [
                                  e._v(e._s(e.icon)),
                                ]),
                                e._v(
                                  '\n          ' + e._s(e.title) + '\n        '
                                ),
                              ],
                              1
                            ),
                            e._v(' '),
                            e._t('default'),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                    e._v(' '),
                    a('v-spacer'),
                    e._v(' '),
                    'admin' === e.loginuser.level
                      ? a(
                          'v-toolbar-title',
                          [
                            a('annualinfo-management', {
                              on: { update: e.update },
                            }),
                          ],
                          1
                        )
                      : e._e(),
                    e._v(' '),
                    'admin' === e.loginuser.level
                      ? a(
                          'v-toolbar-title',
                          [
                            a('database-management', {
                              on: {
                                dbbackup: e.dbbackup,
                                dbrestore: e.dbrestore,
                              },
                            }),
                          ],
                          1
                        )
                      : e._e(),
                    e._v(' '),
                    a(
                      'v-toolbar-title',
                      [
                        a(
                          'v-tooltip',
                          { attrs: { bottom: '' } },
                          [
                            a(
                              'v-btn',
                              {
                                attrs: { slot: 'activator', icon: '' },
                                on: {
                                  click: function (t) {
                                    return e.logout(e.$cookie, e.$router);
                                  },
                                },
                                slot: 'activator',
                              },
                              [
                                a('v-icon', { attrs: { color: 'white' } }, [
                                  e._v('power_settings_new'),
                                ]),
                              ],
                              1
                            ),
                            e._v(
                              '\n        ' +
                                e._s(e.loalocale.self.logout) +
                                '\n      '
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var tt = {
          name: 'PageContainer',
          components: {
            'nav-drawer': a('VU/8')(
              Ze,
              et,
              !1,
              function (e) {
                a('pNjp');
              },
              'data-v-96fc41e8',
              null
            ).exports,
          },
          props: {
            icon: { type: String, default: '' },
            title: { type: String, default: '' },
          },
          data: function () {
            return {};
          },
          methods: {
            notified: function (e) {
              this.$emit('notified', e);
            },
          },
        },
        at = {
          render: function () {
            var e = this.$createElement,
              t = this._self._c || e;
            return t(
              'v-app',
              { attrs: { id: 'inspire' } },
              [
                t(
                  'nav-drawer',
                  {
                    attrs: { title: this.title, icon: this.icon },
                    on: { notified: this.notified },
                  },
                  [this._t('tooltip')],
                  2
                ),
                this._v(' '),
                t(
                  'v-content',
                  [
                    t(
                      'v-container',
                      { attrs: { fluid: '', 'fill-height': '' } },
                      [
                        t(
                          'v-layout',
                          [
                            t(
                              'v-flex',
                              { attrs: { xs12: '' } },
                              [this._t('default')],
                              2
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var nt = a('VU/8')(
          tt,
          at,
          !1,
          function (e) {
            a('/ozO');
          },
          null,
          null
        ).exports,
        ot = {
          name: 'List',
          components: {
            'employee-action': y,
            'signing-block': ae,
            'system-notification': se,
            'leave-type-refreshed-notification': ie,
            'page-container': nt,
          },
          data: function () {
            return {
              news: !1,
              systemNotification: {
                level: 'warning',
                text: '',
                visible: !1,
                handler: function () {},
              },
              search: '',
              headers: [],
              employees: [],
              fullControl: !1,
              showResigners: !1,
              year: new Date().getFullYear(),
            };
          },
          computed: {
            filteredEmployees: function () {
              var e = this;
              return this.employees.filter(function (t) {
                return e.showResigners || t.enabled;
              });
            },
          },
          created: function () {
            this.headers = [
              { text: this.loalocale.self.employeeID, value: 'employeeID' },
              { text: this.loalocale.self.name, value: 'name' },
              { text: this.loalocale.self.username, value: 'username' },
              { text: this.loalocale.self.dept, value: 'dept' },
              { text: this.loalocale.self.arrivedDate, value: 'arrivedDate' },
              { text: this.loalocale.self.annualInfo, value: 'annualInfo' },
              { text: this.loalocale.self.action, value: '' },
            ];
          },
          mounted: function () {
            this.getEmployees(),
              (this.news =
                this.$route.params.logs && this.$route.params.logs.length > 0);
          },
          methods: {
            download: function () {
              var e = this;
              this.filteredEmployees.forEach(function (t) {
                var a = ze.exportEmployee({
                    year: new Date().getFullYear(),
                    loginuser: e.loginuser.username,
                    token: e.loginuser.token,
                    username: t.username,
                  }),
                  n = document.createElement('iframe');
                (n.src = a),
                  (n.style = 'display:none'),
                  document.body.appendChild(n);
              });
            },
            getEmployees: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s, r;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              ke({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data),
                              (o = n.message),
                              (s = n.employees),
                              (r = n.fullControl),
                              s
                                ? (e.employees = s.map(function (e) {
                                    return p()({}, e, {
                                      unSigningRecords: e.unSigningRecords.map(
                                        function (e) {
                                          return p()(
                                            {},
                                            e,
                                            J.lookUpLeaveTypeIconNClass(
                                              e.leaveType
                                            )
                                          );
                                        }
                                      ),
                                    });
                                  }))
                                : ((e.systemNotification.text = J.lookUpCustomMessage(
                                    o
                                  )),
                                  (e.systemNotification.visible = !0)),
                              (e.fullControl = r);
                          case 9:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            toggleEnable: function (e) {
              var t = this;
              return v()(
                u.a.mark(function a() {
                  return u.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.next = 2),
                              Ae({
                                loginuser: t.loginuser.username,
                                token: t.loginuser.token,
                                id: e,
                              })
                            );
                          case 2:
                            t.getEmployees();
                          case 3:
                          case 'end':
                            return a.stop();
                        }
                    },
                    a,
                    t
                  );
                })
              )();
            },
            deleteEmployee: function (e) {
              var t = this;
              return v()(
                u.a.mark(function a() {
                  return u.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.next = 2),
                              Re({
                                loginuser: t.loginuser.username,
                                token: t.loginuser.token,
                                id: e,
                              })
                            );
                          case 2:
                            t.getEmployees();
                          case 3:
                          case 'end':
                            return a.stop();
                        }
                    },
                    a,
                    t
                  );
                })
              )();
            },
            createEmployee: function () {
              this.$router.push({ name: 'Detail', params: { id: 'new' } });
            },
            sign: function (e, t, a) {
              var n = this;
              return v()(
                u.a.mark(function o() {
                  var s, r, l, i;
                  return u.a.wrap(
                    function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2),
                              Le({
                                loginuser: n.loginuser.username,
                                token: n.loginuser.token,
                                id: e,
                                recordID: t,
                                pass: a,
                              })
                            );
                          case 2:
                            (s = o.sent),
                              (r = s.data),
                              (l = r.success),
                              (i = r.message),
                              l
                                ? n.getEmployees()
                                : ((n.systemNotification.text = J.lookUpCustomMessage(
                                    i
                                  )),
                                  (n.systemNotification.visible = !0));
                          case 7:
                          case 'end':
                            return o.stop();
                        }
                    },
                    o,
                    n
                  );
                })
              )();
            },
            formatDate: J.formatDate,
            generateleaveTypeSummary: function (e) {
              return Je.generateleaveTypeSummary({
                days: e.consumes.days,
                hours: e.consumes.halfHours / 2,
                totalDays: e.totals.days,
                totalHours: e.totals.halfHours / 2,
              });
            },
          },
        },
        st = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'page-container',
              {
                attrs: { title: e.loalocale.self.title, icon: 'view_list' },
                on: {
                  notified: function (t) {
                    return (e.systemNotification = t);
                  },
                },
              },
              [
                a(
                  'v-card',
                  { staticClass: 'elevation-12' },
                  [
                    a(
                      'v-card-title',
                      [
                        e.fullControl
                          ? a('v-switch', {
                              attrs: { label: e.loalocale.self.showResigners },
                              model: {
                                value: e.showResigners,
                                callback: function (t) {
                                  e.showResigners = t;
                                },
                                expression: 'showResigners',
                              },
                            })
                          : e._e(),
                        e._v(' '),
                        a('v-spacer'),
                        e._v(' '),
                        a('v-text-field', {
                          attrs: {
                            'append-icon': 'search',
                            label: e.loalocale.self.search,
                            'hide-details': '',
                          },
                          model: {
                            value: e.search,
                            callback: function (t) {
                              e.search = t;
                            },
                            expression: 'search',
                          },
                        }),
                        e._v(' '),
                        a(
                          'div',
                          {
                            staticStyle: {
                              border: '1px solid black',
                              'margin-left': '10px',
                              'border-radius': '4px',
                              'padding-right': '10px',
                            },
                          },
                          [
                            a(
                              'v-btn',
                              { on: { click: e.download } },
                              [
                                a('v-icon', [e._v('get_app')]),
                                e._v(
                                  '\n          ' +
                                    e._s(e.loalocale.self.download) +
                                    '\n        '
                                ),
                              ],
                              1
                            ),
                            e._v(' '),
                            a('label', [
                              e._v(e._s(e.loalocale.self.year) + ':'),
                            ]),
                            e._v(' '),
                            a('input', {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.year,
                                  expression: 'year',
                                },
                              ],
                              staticStyle: {
                                width: '60px',
                                border: '1px solid black',
                                'border-radius': '4px',
                                padding: '4px 6px',
                              },
                              domProps: { value: e.year },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    (e.year = t.target.value);
                                },
                              },
                            }),
                          ],
                          1
                        ),
                        e._v(' '),
                        e.fullControl
                          ? a(
                              'v-btn',
                              {
                                staticClass: 'theme add-btn',
                                attrs: { dark: '' },
                                on: { click: e.createEmployee },
                              },
                              [
                                a('v-icon', [e._v('add')]),
                                e._v(
                                  '\n        ' +
                                    e._s(e.loalocale.self.create) +
                                    '\n      '
                                ),
                              ],
                              1
                            )
                          : e._e(),
                      ],
                      1
                    ),
                    e._v(' '),
                    a('v-data-table', {
                      attrs: {
                        'must-sort': '',
                        search: e.search,
                        headers: e.headers,
                        items: e.filteredEmployees,
                        'item-key': '_id',
                        'rows-per-page-items': [
                          {
                            text: '$vuetify.dataIterator.rowsPerPageAll',
                            value: -1,
                          },
                        ],
                      },
                      scopedSlots: e._u([
                        {
                          key: 'items',
                          fn: function (t) {
                            return [
                              a(
                                'tr',
                                {
                                  class: t.item.enabled ? '' : 'disabled',
                                  on: {
                                    click: function (e) {
                                      t.expanded = !t.expanded;
                                    },
                                  },
                                },
                                [
                                  a('td', [e._v(e._s(t.item.employeeID))]),
                                  e._v(' '),
                                  a(
                                    'td',
                                    { staticClass: 'min-width-160' },
                                    [
                                      e._v(
                                        '\n            ' +
                                          e._s(t.item.name) +
                                          '\n            '
                                      ),
                                      t.item.unSigningRecords.length > 0
                                        ? a(
                                            'v-badge',
                                            { attrs: { left: '' } },
                                            [
                                              a(
                                                'v-icon',
                                                { attrs: { color: 'blue' } },
                                                [e._v('textsms')]
                                              ),
                                            ],
                                            1
                                          )
                                        : e._e(),
                                    ],
                                    1
                                  ),
                                  e._v(' '),
                                  a('td', [e._v(e._s(t.item.username))]),
                                  e._v(' '),
                                  a('td', { staticClass: 'min-width-120' }, [
                                    e._v(e._s(t.item.dept)),
                                  ]),
                                  e._v(' '),
                                  a('td', { staticClass: 'min-width-160' }, [
                                    e._v(
                                      '\n            ' +
                                        e._s(e.formatDate(t.item.arrivedDate)) +
                                        '\n          '
                                    ),
                                  ]),
                                  e._v(' '),
                                  a('td', { staticClass: 'min-width-160' }, [
                                    e._v(
                                      '\n            ' +
                                        e._s(
                                          e.generateleaveTypeSummary(
                                            t.item.annualInfo
                                          )
                                        ) +
                                        '\n          '
                                    ),
                                  ]),
                                  e._v(' '),
                                  a(
                                    'td',
                                    { staticClass: 'min-width-380' },
                                    [
                                      a('employee-action', {
                                        key: t.item._id,
                                        attrs: {
                                          employee: t.item,
                                          'full-control': e.fullControl,
                                        },
                                        on: {
                                          delete: e.deleteEmployee,
                                          toggle: e.toggleEnable,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ];
                          },
                        },
                        {
                          key: 'expand',
                          fn: function (t) {
                            return [
                              a(
                                'v-card',
                                { attrs: { flat: '' } },
                                [
                                  t.item.enabled
                                    ? a(
                                        'v-list',
                                        e._l(
                                          t.item.unSigningRecords,
                                          function (n) {
                                            return a('signing-block', {
                                              key: n._id,
                                              attrs: {
                                                employee: t.item,
                                                record: n,
                                              },
                                              on: { sign: e.sign },
                                            });
                                          }
                                        ),
                                        1
                                      )
                                    : e._e(),
                                ],
                                1
                              ),
                            ];
                          },
                        },
                      ]),
                    }),
                    e._v(' '),
                    a('v-card-text', {
                      staticStyle: { height: '100px', position: 'relative' },
                    }),
                  ],
                  1
                ),
                e._v(' '),
                a('leave-type-refreshed-notification', {
                  attrs: {
                    'leave-types': e.$route.params.logs,
                    'full-control': e.fullControl,
                  },
                  on: {
                    close: function (t) {
                      e.news = !1;
                    },
                  },
                  model: {
                    value: e.news,
                    callback: function (t) {
                      e.news = t;
                    },
                    expression: 'news',
                  },
                }),
                e._v(' '),
                a(
                  'system-notification',
                  {
                    on: {
                      close: function (t) {
                        e.systemNotification.visible = !1;
                      },
                    },
                    model: {
                      value: e.systemNotification,
                      callback: function (t) {
                        e.systemNotification = t;
                      },
                      expression: 'systemNotification',
                    },
                  },
                  [a('div', [e._v(e._s(e.systemNotification.text))])]
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var rt = a('VU/8')(
          ot,
          st,
          !1,
          function (e) {
            a('YDtG');
          },
          'data-v-5ebc0820',
          null
        ).exports,
        lt = a('mvHQ'),
        it = a.n(lt),
        ct = {
          name: 'EmployeeProfile',
          props: {
            profile: {
              type: Object,
              default: function () {
                return {
                  employeeID: '',
                  dept: '',
                  name: '',
                  username: '',
                  arrivedDate: '',
                  level: '',
                  signers: [],
                  email: '',
                };
              },
            },
            signerOptions: {
              type: Array,
              default: function () {
                return { id: '', dept: '', name: '', username: '', level: '' };
              },
            },
            deptOptions: {
              type: Array,
              default: function () {
                return [];
              },
            },
            levelOptions: {
              type: Array,
              default: function () {
                return [];
              },
            },
            readonly: { type: Boolean, default: !0 },
            addingNew: { type: Boolean, default: !0 },
          },
          computed: {
            signerInfos: function () {
              var e = this;
              return this.signerOptions
                .filter(function (t) {
                  return t.username !== e.username;
                })
                .map(function (e) {
                  return '[' + e.dept + ']' + e.name + '(' + e.username + ')';
                });
            },
            formattedSelectedSigners: {
              set: function (e) {
                var t = this,
                  a = e
                    .map(function (e) {
                      var a = /\[(.*?)\](.*?)\((.*?)\)/.exec(e),
                        n = o()(a, 4),
                        s = n[1],
                        r = n[2],
                        l = n[3];
                      if (s && r && l) {
                        var i = t.signerOptions.find(function (e) {
                          return e.username === l;
                        });
                        if (i) return i;
                      }
                    })
                    .filter(function (e) {
                      return e;
                    });
                this.$emit(
                  'update:profile',
                  ve()({}, this.profile, { signers: a })
                );
              },
              get: function () {
                return this.profile.signers.map(function (e) {
                  return '[' + e.dept + ']' + e.name + '(' + e.username + ')';
                });
              },
            },
          },
          data: function () {
            return { datepickerMenu: !1, dateInput: '' };
          },
          watch: {
            profile: function () {
              this.dateInput = this.profile.arrivedDate;
            },
          },
        },
        ut = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-layout',
              { attrs: { row: '', wrap: '' } },
              [
                a(
                  'v-flex',
                  { attrs: { xs5: '' } },
                  [
                    a('v-text-field', {
                      attrs: {
                        'prepend-icon': 'star_border',
                        rules: [
                          function (t) {
                            return !!t || e.loalocale.self.noEmpty;
                          },
                        ],
                        label: e.loalocale.self.employeeID,
                        required: '',
                        readonly: !e.addingNew && e.readonly,
                      },
                      model: {
                        value: e.profile.employeeID,
                        callback: function (t) {
                          e.$set(e.profile, 'employeeID', t);
                        },
                        expression: 'profile.employeeID',
                      },
                    }),
                  ],
                  1
                ),
                e._v(' '),
                a('v-flex', { attrs: { xs1: '' } }),
                e._v(' '),
                a(
                  'v-flex',
                  { attrs: { xs6: '' } },
                  [
                    a('v-select', {
                      attrs: {
                        'prepend-icon': 'group',
                        items: e.deptOptions,
                        label: e.loalocale.self.dept,
                        required: '',
                        readonly: !e.addingNew && e.readonly,
                        rules: [
                          function (t) {
                            return !!t || e.loalocale.self.noEmpty;
                          },
                        ],
                      },
                      model: {
                        value: e.profile.dept,
                        callback: function (t) {
                          e.$set(e.profile, 'dept', t);
                        },
                        expression: 'profile.dept',
                      },
                    }),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-flex',
                  { attrs: { xs6: '' } },
                  [
                    a('v-text-field', {
                      attrs: {
                        'prepend-icon': 'person',
                        rules: [
                          function (t) {
                            return !!t || e.loalocale.self.noEmpty;
                          },
                        ],
                        label: e.loalocale.self.name,
                        required: '',
                        readonly: !e.addingNew && e.readonly,
                      },
                      model: {
                        value: e.profile.name,
                        callback: function (t) {
                          e.$set(e.profile, 'name', t);
                        },
                        expression: 'profile.name',
                      },
                    }),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-flex',
                  { attrs: { xs6: '' } },
                  [
                    a('v-text-field', {
                      attrs: {
                        rules: [
                          function (t) {
                            return !!t || e.loalocale.self.noEmpty;
                          },
                        ],
                        label: e.loalocale.self.username,
                        required: '',
                        readonly: !e.addingNew && !e.addingNew,
                      },
                      model: {
                        value: e.profile.username,
                        callback: function (t) {
                          e.$set(e.profile, 'username', t);
                        },
                        expression: 'profile.username',
                      },
                    }),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-flex',
                  { attrs: { xs6: '' } },
                  [
                    a(
                      'v-menu',
                      {
                        attrs: {
                          'close-on-content-click': !1,
                          'nudge-right': 40,
                          lazy: '',
                          transition: 'scale-transition',
                          'offset-y': '',
                          'full-width': '',
                          'max-width': '290px',
                          'min-width': '290px',
                          disabled: !e.addingNew && e.readonly,
                        },
                        model: {
                          value: e.datepickerMenu,
                          callback: function (t) {
                            e.datepickerMenu = t;
                          },
                          expression: 'datepickerMenu',
                        },
                      },
                      [
                        a('v-text-field', {
                          attrs: {
                            slot: 'activator',
                            mask: '####-##-##',
                            label: e.loalocale.self.arrivedDate,
                            'persistent-hint': '',
                            'prepend-icon': 'event',
                            'return-masked-value': '',
                            rules: [
                              function (t) {
                                return !!t || e.loalocale.self.noEmpty;
                              },
                            ],
                          },
                          on: {
                            blur: function (t) {
                              e.profile.arrivedDate = e.dateInput;
                            },
                          },
                          slot: 'activator',
                          model: {
                            value: e.dateInput,
                            callback: function (t) {
                              e.dateInput = t;
                            },
                            expression: 'dateInput',
                          },
                        }),
                        e._v(' '),
                        a('v-date-picker', {
                          attrs: { 'no-title': '', scrollable: '' },
                          on: {
                            input: function (t) {
                              (e.datepickerMenu = !1),
                                (e.dateInput = e.profile.arrivedDate);
                            },
                          },
                          model: {
                            value: e.profile.arrivedDate,
                            callback: function (t) {
                              e.$set(e.profile, 'arrivedDate', t);
                            },
                            expression: 'profile.arrivedDate',
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-flex',
                  { attrs: { xs6: '' } },
                  [
                    a('v-select', {
                      attrs: {
                        'prepend-icon': 'security',
                        items: e.levelOptions,
                        label: e.loalocale.self.level,
                        required: '',
                        readonly: !e.addingNew && e.readonly,
                        rules: [
                          function (t) {
                            return !!t || e.loalocale.self.noEmpty;
                          },
                        ],
                      },
                      model: {
                        value: e.profile.level,
                        callback: function (t) {
                          e.$set(e.profile, 'level', t);
                        },
                        expression: 'profile.level',
                      },
                    }),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-flex',
                  { attrs: { xs12: '' } },
                  [
                    a('v-text-field', {
                      attrs: {
                        'prepend-icon': 'email',
                        type: 'email',
                        label: e.loalocale.self.email,
                        readonly: !e.addingNew && e.readonly,
                        rules: [
                          function (t) {
                            return (
                              !t ||
                              /.+@.+/.test(t) ||
                              e.loalocale.self.invalidEmail
                            );
                          },
                        ],
                      },
                      model: {
                        value: e.profile.email,
                        callback: function (t) {
                          e.$set(e.profile, 'email', t);
                        },
                        expression: 'profile.email',
                      },
                    }),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-flex',
                  { attrs: { xs12: '' } },
                  [
                    a('v-combobox', {
                      attrs: {
                        items: e.signerInfos,
                        label: e.loalocale.self.signers,
                        multiple: '',
                        chips: '',
                        readonly: !e.addingNew && e.readonly,
                      },
                      model: {
                        value: e.formattedSelectedSigners,
                        callback: function (t) {
                          e.formattedSelectedSigners = t;
                        },
                        expression: 'formattedSelectedSigners',
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var dt = a('VU/8')(
          ct,
          ut,
          !1,
          function (e) {
            a('6+Lw');
          },
          null,
          null
        ).exports,
        pt = {
          name: 'LeaveTypeTooltip',
          props: {
            complete: { type: Boolean, default: !1 },
            info: {
              type: Object,
              default: function () {
                return {
                  consumes: { days: 0, halfHours: 0 },
                  totals: { days: 0, halfHours: 0 },
                  deadline: '',
                };
              },
            },
          },
          computed: {
            formattedInfo: function () {
              return {
                consumes: J.stringFormat(
                  this.loalocale.self.stringTemplate.consumes,
                  this.info.consumes.days,
                  this.info.consumes.halfHours
                    ? this.info.consumes.halfHours / 2
                    : this.info.consumes.hours
                    ? this.info.consumes.hours
                    : 0
                ),
                totals: J.stringFormat(
                  this.loalocale.self.stringTemplate.totals,
                  this.info.totals.days,
                  this.info.totals.halfHours
                    ? this.info.totals.halfHours / 2
                    : this.info.totals.hours
                    ? this.info.totals.hours
                    : 0
                ),
                deadline: J.stringFormat(
                  this.loalocale.self.stringTemplate.deadline,
                  this.info.deadline
                ),
              };
            },
          },
        },
        ft = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a('div', [
              a('div', [e._v(e._s(e.formattedInfo.consumes))]),
              e._v(' '),
              e.complete
                ? a('div', [e._v(e._s(e.formattedInfo.totals))])
                : e._e(),
              e._v(' '),
              a('div', [e._v(e._s(e.formattedInfo.deadline))]),
            ]);
          },
          staticRenderFns: [],
        };
      var vt = a('VU/8')(
          pt,
          ft,
          !1,
          function (e) {
            a('K7yi');
          },
          null,
          null
        ).exports,
        mt = {
          name: 'AnimatedCircular',
          props: {
            value: { type: Number, default: 0 },
            color: { type: String, default: '' },
          },
          mounted: function () {
            var e = this;
            setInterval(function () {
              e.initial = e.value;
            }, 0);
          },
          data: function () {
            return { initial: 0 };
          },
        },
        ht = {
          render: function () {
            var e = this.$createElement;
            return (this._self._c || e)(
              'v-progress-circular',
              {
                attrs: {
                  rotate: -90,
                  size: 50,
                  width: 3,
                  value: this.initial,
                  color: this.color,
                },
              },
              [this._t('default')],
              2
            );
          },
          staticRenderFns: [],
        };
      var yt = a('VU/8')(
          mt,
          ht,
          !1,
          function (e) {
            a('WVdF');
          },
          null,
          null
        ).exports,
        gt = {
          name: 'LeaveTypeEditorDialog',
          props: {
            info: {
              type: Object,
              default: function () {
                return {
                  consumes: { days: 0, hours: 0 },
                  totals: { days: 0, hours: 0 },
                  deadline: '',
                  default: !1,
                  index: 0,
                  halfHoursEnabled: !1,
                };
              },
            },
          },
          data: function () {
            return { dialog: !1, datepicker: !1, dateInput: '' };
          },
          mounted: function () {
            this.dateInput = this.info.deadline;
          },
          methods: {
            removeOne: function (e) {
              this.$emit('removeOne', e);
            },
          },
        },
        _t = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'div',
              [
                a(
                  'v-btn',
                  {
                    attrs: { icon: '', ripple: '' },
                    on: {
                      click: function (t) {
                        e.dialog = !0;
                      },
                    },
                  },
                  [a('v-icon', [e._v('edit')])],
                  1
                ),
                e._v(' '),
                a(
                  'v-dialog',
                  {
                    attrs: { 'max-width': '400px' },
                    model: {
                      value: e.dialog,
                      callback: function (t) {
                        e.dialog = t;
                      },
                      expression: 'dialog',
                    },
                  },
                  [
                    a(
                      'v-card',
                      [
                        a('v-card-title', [
                          a('h2', [e._v(e._s(e.info.title))]),
                        ]),
                        e._v(' '),
                        a(
                          'v-card-text',
                          [
                            a(
                              'v-layout',
                              { attrs: { row: '', wrap: '' } },
                              [
                                a(
                                  'v-flex',
                                  { attrs: { xs12: '' } },
                                  [
                                    e.info.default
                                      ? e._e()
                                      : a('v-checkbox', {
                                          attrs: {
                                            label: e.loalocale.self.hoursLeave,
                                          },
                                          model: {
                                            value: e.info.halfHoursEnabled,
                                            callback: function (t) {
                                              e.$set(
                                                e.info,
                                                'halfHoursEnabled',
                                                t
                                              );
                                            },
                                            expression: 'info.halfHoursEnabled',
                                          },
                                        }),
                                  ],
                                  1
                                ),
                                e._v(' '),
                                a(
                                  'v-flex',
                                  { attrs: { xs6: '' } },
                                  [
                                    a('v-text-field', {
                                      attrs: {
                                        type: 'number',
                                        min: '0',
                                        label:
                                          e.loalocale.self.consumes +
                                          e.loalocale.self.days,
                                      },
                                      model: {
                                        value: e.info.consumes.days,
                                        callback: function (t) {
                                          e.$set(
                                            e.info.consumes,
                                            'days',
                                            e._n(t)
                                          );
                                        },
                                        expression: 'info.consumes.days',
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                e._v(' '),
                                a(
                                  'v-flex',
                                  { attrs: { xs6: '' } },
                                  [
                                    a('v-text-field', {
                                      attrs: {
                                        disabled: !e.info.halfHoursEnabled,
                                        type: 'number',
                                        min: '0',
                                        max: '15',
                                        label: e.loalocale.self.hours,
                                      },
                                      model: {
                                        value: e.info.consumes.hours,
                                        callback: function (t) {
                                          e.$set(
                                            e.info.consumes,
                                            'hours',
                                            e._n(t)
                                          );
                                        },
                                        expression: 'info.consumes.hours',
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                e._v(' '),
                                a(
                                  'v-flex',
                                  { attrs: { xs6: '' } },
                                  [
                                    a('v-text-field', {
                                      attrs: {
                                        type: 'number',
                                        min: '0',
                                        label:
                                          e.loalocale.self.totals +
                                          e.loalocale.self.days,
                                      },
                                      model: {
                                        value: e.info.totals.days,
                                        callback: function (t) {
                                          e.$set(
                                            e.info.totals,
                                            'days',
                                            e._n(t)
                                          );
                                        },
                                        expression: 'info.totals.days',
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                e._v(' '),
                                a(
                                  'v-flex',
                                  { attrs: { xs6: '' } },
                                  [
                                    a('v-text-field', {
                                      attrs: {
                                        disabled: !e.info.halfHoursEnabled,
                                        type: 'number',
                                        min: '0',
                                        max: '15',
                                        label: e.loalocale.self.hours,
                                      },
                                      model: {
                                        value: e.info.totals.hours,
                                        callback: function (t) {
                                          e.$set(
                                            e.info.totals,
                                            'hours',
                                            e._n(t)
                                          );
                                        },
                                        expression: 'info.totals.hours',
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                e._v(' '),
                                a(
                                  'v-flex',
                                  { attrs: { xs6: '' } },
                                  [
                                    a(
                                      'v-menu',
                                      {
                                        attrs: {
                                          'close-on-content-click': !1,
                                          'nudge-right': 0,
                                          lazy: '',
                                          transition: 'scale-transition',
                                          'offset-x': '',
                                          'full-width': '',
                                          'max-width': '290px',
                                          'min-width': '290px',
                                        },
                                        model: {
                                          value: e.datepicker,
                                          callback: function (t) {
                                            e.datepicker = t;
                                          },
                                          expression: 'datepicker',
                                        },
                                      },
                                      [
                                        a('v-text-field', {
                                          attrs: {
                                            slot: 'activator',
                                            label: e.loalocale.self.deadline,
                                            'persistent-hint': '',
                                            'prepend-icon': 'event',
                                            mask: '####-##-##',
                                            'return-masked-value': '',
                                          },
                                          on: {
                                            blur: function (t) {
                                              e.info.deadline = e.dateInput;
                                            },
                                          },
                                          slot: 'activator',
                                          model: {
                                            value: e.dateInput,
                                            callback: function (t) {
                                              e.dateInput = t;
                                            },
                                            expression: 'dateInput',
                                          },
                                        }),
                                        e._v(' '),
                                        a('v-date-picker', {
                                          attrs: { 'no-title': '' },
                                          on: {
                                            input: function (t) {
                                              (e.datepicker = !1),
                                                (e.dateInput = e.info.deadline);
                                            },
                                          },
                                          model: {
                                            value: e.info.deadline,
                                            callback: function (t) {
                                              e.$set(e.info, 'deadline', t);
                                            },
                                            expression: 'info.deadline',
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(' '),
                        a(
                          'v-card-actions',
                          [
                            a('v-spacer'),
                            e._v(' '),
                            a(
                              'v-btn',
                              {
                                staticClass: 'theme',
                                on: {
                                  click: function (t) {
                                    e.dialog = !1;
                                  },
                                },
                              },
                              [e._v(e._s(e.loalocale.self.close))]
                            ),
                            e._v(' '),
                            e.info.default
                              ? e._e()
                              : a(
                                  'v-btn',
                                  {
                                    staticClass: 'theme',
                                    on: {
                                      click: function (t) {
                                        return e.removeOne(e.info.index);
                                      },
                                    },
                                  },
                                  [e._v(e._s(e.loalocale.self.remove))]
                                ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var xt = {
          name: 'LeaveTypeRow',
          components: {
            'leave-type-tooltip': vt,
            'animated-circular': yt,
            'leave-type-editor-dialog': a('VU/8')(
              gt,
              _t,
              !1,
              function (e) {
                a('HL/1');
              },
              null,
              null
            ).exports,
          },
          props: {
            leaveType: { type: Object },
            readonly: { type: Boolean, default: !1 },
          },
          computed: {},
          data: function () {
            return { customTypeName: '' };
          },
          methods: {
            calculatePercentage: function (e, t) {
              var a =
                8 * e.days * 2 +
                (e.halfHours ? e.halfHours : e.hours ? 2 * e.hours : 0);
              return (
                (100 *
                  (a -
                    (8 * t.days * 2 +
                      (t.halfHours
                        ? t.halfHours
                        : t.hours
                        ? 2 * t.hours
                        : 0)))) /
                a
              );
            },
            pickOne: function (e) {
              this.$emit('pickOne', e);
            },
            removeOne: function (e) {
              this.$emit('removeOne', e);
            },
          },
        },
        bt = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-tooltip',
              { attrs: { bottom: '' } },
              [
                a(
                  'v-list-tile',
                  {
                    staticClass: 'row',
                    attrs: { slot: 'activator', avatar: '' },
                    slot: 'activator',
                  },
                  [
                    a(
                      'v-list-tile-avatar',
                      {
                        staticClass: 'clickable',
                        on: {
                          click: function (t) {
                            return e.pickOne(e.leaveType);
                          },
                        },
                      },
                      [
                        a('v-icon', { class: e.leaveType.class }, [
                          e._v(e._s(e.leaveType.icon)),
                        ]),
                      ],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-list-tile-content',
                      {
                        staticClass: 'clickable',
                        attrs: { title: e.leaveType.title },
                        on: {
                          click: function (t) {
                            return e.pickOne(e.leaveType);
                          },
                        },
                      },
                      [a('v-list-tile-title', [e._v(e._s(e.leaveType.title))])],
                      1
                    ),
                    e._v(' '),
                    !e.readonly || e.leaveType.countdown
                      ? a(
                          'v-list-tile-avatar',
                          [
                            a(
                              'v-tooltip',
                              { attrs: { bottom: '' } },
                              [
                                a(
                                  'animated-circular',
                                  {
                                    attrs: {
                                      slot: 'activator',
                                      value: e.leaveType.countdown
                                        ? e.calculatePercentage(
                                            e.leaveType.totals,
                                            e.leaveType.consumes
                                          )
                                        : 100,
                                      color: e.leaveType.color,
                                    },
                                    slot: 'activator',
                                  },
                                  [
                                    e.leaveType.countdown
                                      ? [
                                          a('span', [e._v('剩')]),
                                          e._v(
                                            e._s(
                                              e.leaveType.totals.days >
                                                e.leaveType.consumes.days
                                                ? e.leaveType.totals.days -
                                                    e.leaveType.consumes.days
                                                : e.leaveType.totals.hours -
                                                    e.leaveType.consumes.hours
                                            )
                                          ),
                                          a('span', [
                                            e._v(
                                              e._s(
                                                e.leaveType.totals.days >
                                                  e.leaveType.consumes.days
                                                  ? '天'
                                                  : '時'
                                              )
                                            ),
                                          ]),
                                        ]
                                      : [
                                          e._v(
                                            '\n            ' +
                                              e._s(e.leaveType.consumes.days)
                                          ),
                                          a('span', [e._v('天')]),
                                        ],
                                  ],
                                  2
                                ),
                                e._v(' '),
                                a('leave-type-tooltip', {
                                  attrs: {
                                    complete: e.leaveType.countdown,
                                    info: e.leaveType,
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : e._e(),
                    e._v(' '),
                    e.readonly
                      ? e._e()
                      : a(
                          'v-list-tile-action',
                          [
                            a('leave-type-editor-dialog', {
                              key: e.leaveType.title,
                              attrs: { info: e.leaveType },
                              on: { removeOne: e.removeOne },
                            }),
                          ],
                          1
                        ),
                    e._v(' '),
                    e.readonly
                      ? e._e()
                      : a(
                          'v-list-tile-action',
                          [
                            a(
                              'v-btn',
                              {
                                attrs: { icon: '', ripple: '' },
                                on: {
                                  click: function (t) {
                                    e.leaveType.enabled = !e.leaveType.enabled;
                                  },
                                },
                              },
                              [
                                a(
                                  'v-icon',
                                  {
                                    class: e.leaveType.enabled
                                      ? 'green--text'
                                      : '',
                                  },
                                  [
                                    e._v(
                                      e._s(
                                        e.leaveType.enabled
                                          ? 'check_box'
                                          : 'check_box_outline_blank'
                                      )
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                    e._v(' '),
                    e.readonly || e.leaveType.default
                      ? e._e()
                      : a(
                          'v-list-tile-action',
                          [
                            a(
                              'v-btn',
                              {
                                attrs: { icon: '', ripple: '' },
                                on: {
                                  click: function (t) {
                                    e.leaveType.stashed = !e.leaveType.stashed;
                                  },
                                },
                              },
                              [
                                a('v-icon', [
                                  e._v(
                                    e._s(
                                      e.leaveType.stashed
                                        ? 'inbox'
                                        : 'move_to_inbox'
                                    )
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                  ],
                  1
                ),
                e._v('\n  ' + e._s(e.leaveType.title) + '\n'),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var kt = {
          name: 'LeaveTypeContainer',
          components: {
            'leave-type-row': a('VU/8')(
              xt,
              bt,
              !1,
              function (e) {
                a('7Za6');
              },
              'data-v-0c4fb5be',
              null
            ).exports,
          },
          props: {
            leaveTypes: {
              type: Array,
              default: function () {
                return [];
              },
            },
            readonly: { type: Boolean, default: !1 },
            helper: { type: Boolean, default: !1 },
          },
          computed: {},
          data: function () {
            return { customTypeName: '', interval: {} };
          },
          methods: {
            pickOne: function (e) {
              this.$emit('pickOne', e);
            },
            importOne: function () {
              this.$emit('importOne', this.customTypeName),
                (this.customTypeName = '');
            },
            removeOne: function (e) {
              this.$emit('removeOne', e);
            },
          },
        },
        wt = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-layout',
              { attrs: { row: '', wrap: '' } },
              [
                e.helper
                  ? a(
                      'v-flex',
                      { attrs: { xs12: '' } },
                      [
                        a('small', [
                          e._v(e._s(e.loalocale.self.pickLeaveType)),
                        ]),
                        e._v(' '),
                        a(
                          'router-link',
                          {
                            attrs: {
                              to: { name: 'LeaveTypeInfo' },
                              target: '_blank',
                            },
                          },
                          [a('v-icon', [e._v('open_in_new')])],
                          1
                        ),
                      ],
                      1
                    )
                  : e._e(),
                e._v(' '),
                a(
                  'v-flex',
                  { attrs: { xs12: '' } },
                  [
                    a(
                      'v-list',
                      [
                        e._l(e.leaveTypes, function (t) {
                          return a('leave-type-row', {
                            key: t.title,
                            attrs: { leaveType: t, readonly: e.readonly },
                            on: { pickOne: e.pickOne, removeOne: e.removeOne },
                          });
                        }),
                        e._v(' '),
                        !e.readonly && e.helper
                          ? a(
                              'v-list-tile',
                              { attrs: { avatar: '' } },
                              [
                                a(
                                  'v-list-tile-avatar',
                                  [
                                    a(
                                      'v-icon',
                                      {
                                        class: [
                                          'teal',
                                          'lighten-3',
                                          'white--text',
                                        ],
                                      },
                                      [e._v('event')]
                                    ),
                                  ],
                                  1
                                ),
                                e._v(' '),
                                a(
                                  'v-list-tile-content',
                                  [
                                    a('v-text-field', {
                                      attrs: {
                                        label: this.loalocale.self.others,
                                      },
                                      model: {
                                        value: e.customTypeName,
                                        callback: function (t) {
                                          e.customTypeName = t;
                                        },
                                        expression: 'customTypeName',
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                e._v(' '),
                                a(
                                  'v-list-tile-action',
                                  [
                                    a(
                                      'v-tooltip',
                                      { attrs: { bottom: '' } },
                                      [
                                        a(
                                          'v-btn',
                                          {
                                            class: e.customTypeName
                                              ? 'theme'
                                              : 'disabled',
                                            attrs: {
                                              slot: 'activator',
                                              icon: '',
                                              ripple: '',
                                              disabled: !e.customTypeName,
                                            },
                                            on: { click: e.importOne },
                                            slot: 'activator',
                                          },
                                          [a('v-icon', [e._v('add')])],
                                          1
                                        ),
                                        e._v(' '),
                                        a('div', [
                                          e._v(e._s(e.loalocale.self.import)),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          : e._e(),
                      ],
                      2
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var Dt = a('VU/8')(
          kt,
          wt,
          !1,
          function (e) {
            a('aL4B');
          },
          'data-v-6d16cd08',
          null
        ).exports,
        Tt = {
          name: 'Detail',
          components: {
            'system-notification': se,
            'employee-profile': dt,
            'employee-account-settings': Ve,
            'leave-type-container': Dt,
          },
          data: function () {
            return {
              systemNotification: { level: 'warning', text: '', visible: !1 },
              valid: !0,
              profile: {
                employeeID: '',
                dept: '',
                name: '',
                username: '',
                arrivedDate: '',
                level: '',
                signers: [],
                email: '',
              },
              account: { password: '', email: '', id: '' },
              leaveTypes: [],
              isEditMode: !1,
              fullControl: !1,
              signerOptions: [
                { id: '', dept: '', name: '', username: '', level: '' },
              ],
              deptOptions: K.deptOptions,
              levelOptions: K.levelOptions,
            };
          },
          computed: {
            availableLTs: function () {
              var e = this;
              return this.leaveTypes.filter(function (t) {
                return !e.isEditMode || (!e.isAvailableLT(t) && !t.stashed);
              });
            },
            unavailableLTs: function () {
              var e = this;
              return this.leaveTypes.filter(function (t) {
                return e.isAvailableLT(t) || t.stashed;
              });
            },
            unavailableLTsGroups: function () {
              var e = [];
              return (
                this.unavailableLTs.forEach(function (t) {
                  var a = new Date(t.deadline).getFullYear(),
                    n = e.find(function (e) {
                      return e.year === a;
                    });
                  n ? n.list.push(t) : e.push({ list: [t], year: a });
                }),
                e
              );
            },
          },
          mounted: function () {
            (this.account.id = this.$route.params.id),
              (this.isEditMode =
                this.$route.params.id && 'new' !== this.$route.params.id),
              this.isEditMode
                ? this.getEmployee()
                : ((this.fullControl = !0),
                  (this.leaveTypes = JSON.parse(it()(K.leaveTypes)))),
              this.getEmployees();
          },
          methods: {
            isAvailableLT: function (e) {
              return (
                e.name.startsWith(K.compensatory.keyword) &&
                e.consumes.days === e.totals.days &&
                e.consumes.hours === e.totals.hours &&
                J.formatDate(e.deadline) <= J.formatDate('now')
              );
            },
            getEmployees: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              we({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data.employees),
                              (e.signerOptions = n.map(function (e) {
                                return {
                                  id: e._id,
                                  dept: e.dept,
                                  name: e.name,
                                  username: e.username,
                                  level: e.level,
                                };
                              }));
                          case 5:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            getEmployee: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s, r, l, i, c, d, p, f, v;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Ie({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                id: e.$route.params.id,
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data),
                              (o = n.employeeID),
                              (s = n.dept),
                              (r = n.name),
                              (l = n.username),
                              (i = n.arrivedDate),
                              (c = n.level),
                              (d = n.signers),
                              (p = n.activatedLeaveTypes),
                              (f = n.fullControl),
                              (v = n.email),
                              (e.profile = {
                                employeeID: o,
                                dept: s,
                                name: r,
                                username: l,
                                arrivedDate: J.formatDate(i),
                                level: c,
                                signers: d,
                                email: v,
                              }),
                              (e.fullControl = f),
                              (e.leaveTypes = e.accumulateLTsCosumes(
                                e.formatLT(p)
                              ));
                          case 17:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            submit: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s, r;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!e.$refs.form.validate()) {
                              t.next = 18;
                              break;
                            }
                            if (
                              ((a = {
                                employeeID: e.profile.employeeID,
                                dept: e.profile.dept,
                                name: e.profile.name,
                                username: e.profile.username,
                                arrivedDate: e.profile.arrivedDate,
                                level: e.profile.level,
                                email: e.profile.email,
                                activatedLeaveTypes: e.leaveTypes.map(function (
                                  e
                                ) {
                                  return ve()({}, e, {
                                    consumes: {
                                      days: e.consumes.days,
                                      halfHours: 2 * e.consumes.hours,
                                    },
                                    totals: {
                                      days: e.totals.days,
                                      halfHours: 2 * e.totals.hours,
                                    },
                                  });
                                }),
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                id: e.$route.params.id,
                                signers: e.profile.signers,
                              }),
                              !e.isEditMode)
                            ) {
                              t.next = 8;
                              break;
                            }
                            return (t.next = 5), Te(a);
                          case 5:
                            (t.t0 = t.sent), (t.next = 11);
                            break;
                          case 8:
                            return (t.next = 10), De(a);
                          case 10:
                            t.t0 = t.sent;
                          case 11:
                            (n = t.t0),
                              (o = n.data),
                              (s = o.success),
                              (r = o.message),
                              s
                                ? e.$router.push({ name: 'List' })
                                : ((e.systemNotification.text = J.lookUpCustomMessage(
                                    r
                                  )),
                                  (e.systemNotification.visible = !0)),
                              (t.next = 19);
                            break;
                          case 18:
                            e.systemNotification = {
                              text: e.loalocale.self.textfieldUndone,
                              level: 'warning',
                              visible: !0,
                            };
                          case 19:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            formatLT: function (e) {
              var t = this,
                a = JSON.parse(it()(K.leaveTypes));
              return (
                e.forEach(function (e) {
                  var t = a.find(function (t) {
                    return t.name === e.name;
                  });
                  if (t)
                    (t.enabled = e.enabled),
                      (t.consumes = {
                        days: e.consumes.days,
                        hours: e.consumes.halfHours
                          ? e.consumes.halfHours / 2
                          : 0,
                      }),
                      (t.totals = {
                        days: e.totals.days,
                        hours: e.totals.halfHours ? e.totals.halfHours / 2 : 0,
                      }),
                      (t.deadline = J.formatDate(e.deadline));
                  else {
                    var n = K.customLeaveType;
                    a.push(
                      ve()({}, n, {
                        index: a.length,
                        enabled: e.enabled,
                        stashed: e.stashed,
                        title: e.name,
                        name: e.name,
                        consumes: {
                          days: e.consumes.days,
                          hours: e.consumes.halfHours
                            ? e.consumes.halfHours / 2
                            : 0,
                        },
                        totals: {
                          days: e.totals.days,
                          hours: e.totals.halfHours
                            ? e.totals.halfHours / 2
                            : 0,
                        },
                        deadline: J.formatDate(e.deadline),
                        halfHoursEnabled: e.halfHoursEnabled,
                      })
                    );
                  }
                }),
                a.filter(function (e) {
                  return t.fullControl || e.enabled;
                })
              );
            },
            remove1LT: function (e) {
              this.leaveTypes = this.leaveTypes.filter(function (t) {
                return t.index !== e;
              });
            },
            import1LT: function (e) {
              if (e) {
                var t = this.leaveTypes.filter(function (t) {
                  return t.name.startsWith(e);
                });
                t.length > 0 && (e += '_' + t.length),
                  this.leaveTypes.push(
                    ve()({}, JSON.parse(it()(K.customLeaveType)), {
                      index: this.leaveTypes.length,
                      title: e,
                      name: e,
                    })
                  );
              }
            },
            accumulateLTsCosumes: function (e) {
              var t = e.find(function (e) {
                return 'familyCare' === e.name;
              });
              t &&
                (e.find(function (e) {
                  return 'personal' === e.name;
                }).consumes.days += t.consumes.days);
              return e;
            },
            resetEmail: function (e, t) {
              var a = this;
              return v()(
                u.a.mark(function n() {
                  return u.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            a.systemNotification = {
                              text: J.lookUpCustomMessage(t),
                              level: e ? 'info' : 'warning',
                              visible: !0,
                              handler: function (t, a) {
                                e && t.push({ name: 'List' });
                              },
                            };
                          case 1:
                          case 'end':
                            return n.stop();
                        }
                    },
                    n,
                    a
                  );
                })
              )();
            },
            resetPWD: function (e, t) {
              var a = this;
              return v()(
                u.a.mark(function n() {
                  return u.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            a.systemNotification = {
                              text: J.lookUpCustomMessage(t),
                              level: e ? 'info' : 'warning',
                              visible: !0,
                              handler: function (t, a) {
                                e &&
                                  (a.delete('loginuser'),
                                  a.delete('token'),
                                  t.push({ name: 'Login' }));
                              },
                            };
                          case 1:
                          case 'end':
                            return n.stop();
                        }
                    },
                    n,
                    a
                  );
                })
              )();
            },
          },
        },
        Ct = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-app',
              { attrs: { id: 'detail' } },
              [
                a(
                  'v-container',
                  { attrs: { fluid: '', 'fill-height': '' } },
                  [
                    a(
                      'v-layout',
                      { attrs: { 'align-center': '', 'justify-center': '' } },
                      [
                        a(
                          'v-flex',
                          { attrs: { xs12: '', sm8: '', md8: '' } },
                          [
                            a(
                              'v-form',
                              {
                                ref: 'form',
                                attrs: { 'lazy-validation': '' },
                                model: {
                                  value: e.valid,
                                  callback: function (t) {
                                    e.valid = t;
                                  },
                                  expression: 'valid',
                                },
                              },
                              [
                                a('employee-profile', {
                                  attrs: {
                                    'signer-options': e.signerOptions,
                                    'dept-options': e.deptOptions,
                                    'level-options': e.levelOptions,
                                    readonly: !e.fullControl,
                                    addingNew: !e.isEditMode,
                                    profile: e.profile,
                                  },
                                  on: {
                                    'update:profile': function (t) {
                                      e.profile = t;
                                    },
                                  },
                                }),
                                e._v(' '),
                                a('employee-account-settings', {
                                  attrs: {
                                    account: e.account,
                                    addingNew: !e.isEditMode,
                                  },
                                  on: {
                                    resetPWD: e.resetPWD,
                                    resetEmail: e.resetEmail,
                                  },
                                }),
                                e._v(' '),
                                a('v-divider'),
                                e._v(' '),
                                a('leave-type-container', {
                                  attrs: {
                                    leaveTypes: e.availableLTs,
                                    readonly: !e.fullControl,
                                    helper: '',
                                  },
                                  on: {
                                    importOne: e.import1LT,
                                    removeOne: e.remove1LT,
                                  },
                                }),
                                e._v(' '),
                                a(
                                  'v-layout',
                                  { attrs: { row: '', wrap: '' } },
                                  [
                                    a(
                                      'v-flex',
                                      [
                                        a(
                                          'v-expansion-panel',
                                          { attrs: { dark: '' } },
                                          [
                                            a(
                                              'v-expansion-panel-content',
                                              [
                                                a(
                                                  'div',
                                                  {
                                                    attrs: { slot: 'header' },
                                                    slot: 'header',
                                                  },
                                                  [
                                                    e._v(
                                                      e._s(
                                                        e.loalocale.self
                                                          .unavailableLTs
                                                      )
                                                    ),
                                                  ]
                                                ),
                                                e._v(' '),
                                                e._l(
                                                  e.unavailableLTsGroups,
                                                  function (t) {
                                                    return a(
                                                      'v-expansion-panel',
                                                      {
                                                        key: t.year,
                                                        staticClass: 'insider',
                                                        attrs: { dark: '' },
                                                      },
                                                      [
                                                        a(
                                                          'v-expansion-panel-content',
                                                          [
                                                            a(
                                                              'div',
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    'header',
                                                                },
                                                                slot: 'header',
                                                              },
                                                              [
                                                                e._v(
                                                                  '\n                        - ' +
                                                                    e._s(
                                                                      t.year
                                                                    ) +
                                                                    ' (' +
                                                                    e._s(
                                                                      t.list
                                                                        .length
                                                                    ) +
                                                                    ')\n                      '
                                                                ),
                                                              ]
                                                            ),
                                                            e._v(' '),
                                                            a(
                                                              'leave-type-container',
                                                              {
                                                                attrs: {
                                                                  leaveTypes:
                                                                    t.list,
                                                                  readonly: !e.fullControl,
                                                                },
                                                                on: {
                                                                  removeOne:
                                                                    e.remove1LT,
                                                                },
                                                              }
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ],
                                                      1
                                                    );
                                                  }
                                                ),
                                              ],
                                              2
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                e._v(' '),
                                a(
                                  'v-layout',
                                  { attrs: { row: '', wrap: '' } },
                                  [
                                    a(
                                      'v-flex',
                                      { attrs: { xs12: '' } },
                                      [
                                        e.fullControl
                                          ? a(
                                              'v-btn',
                                              {
                                                class: ['theme', 'float-right'],
                                                on: { click: e.submit },
                                              },
                                              [
                                                e._v(
                                                  e._s(
                                                    e.isEditMode
                                                      ? e.loalocale.self.update
                                                      : e.loalocale.self.create
                                                  )
                                                ),
                                              ]
                                            )
                                          : e._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'system-notification',
                  {
                    on: {
                      close: function (t) {
                        e.systemNotification.visible = !1;
                      },
                    },
                    model: {
                      value: e.systemNotification,
                      callback: function (t) {
                        e.systemNotification = t;
                      },
                      expression: 'systemNotification',
                    },
                  },
                  [a('div', [e._v(e._s(e.systemNotification.text))])]
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var Ft = a('VU/8')(
          Tt,
          Ct,
          !1,
          function (e) {
            a('Xb8K'), a('rQOX');
          },
          'data-v-1b814ba3',
          null
        ).exports,
        Et = {
          name: 'CalendarController',
          props: {
            calendarDate: {
              type: Date,
              default: function () {
                return new Date();
              },
            },
            annual: { type: Boolean, default: !1 },
          },
          data: function () {
            return {};
          },
          computed: {
            year: function () {
              return this.calendarDate.getFullYear();
            },
            month: function () {
              return this.calendarDate.getMonth() + 1;
            },
            date: function () {
              return this.calendarDate.getDate();
            },
          },
          methods: {
            toPrev: function () {
              var e = this.annual
                ? new Date(this.year - 1, this.month, 1)
                : new Date(this.year, this.month - 1 - 1, 1);
              this.$emit('prev', e);
            },
            toNext: function () {
              var e = this.annual
                ? new Date(this.year + 1, this.month, 1)
                : new Date(this.year, this.month + 1 - 1, 1);
              this.$emit('next', e);
            },
            toLastest: function () {
              var e = new Date();
              this.$emit('tolastest', e);
            },
          },
        },
        Lt = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-card-title',
              [
                e._t('default'),
                e._v(' '),
                a('v-spacer'),
                e._v(' '),
                a(
                  'div',
                  { staticClass: 'controller' },
                  [
                    a(
                      'v-btn',
                      {
                        attrs: { icon: '', flat: '' },
                        on: { click: e.toPrev },
                      },
                      [a('v-icon', [e._v('keyboard_arrow_left')])],
                      1
                    ),
                    e._v(
                      '\n    ' +
                        e._s(e.year) +
                        e._s(e.annual ? '' : '/' + e.month) +
                        '\n    '
                    ),
                    a(
                      'v-btn',
                      {
                        attrs: { icon: '', flat: '' },
                        on: { click: e.toNext },
                      },
                      [a('v-icon', [e._v('keyboard_arrow_right')])],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-btn',
                      {
                        attrs: { icon: '', flat: '' },
                        on: { click: e.toLastest },
                      },
                      [a('v-icon', [e._v('last_page')])],
                      1
                    ),
                  ],
                  1
                ),
              ],
              2
            );
          },
          staticRenderFns: [],
        };
      var It = a('VU/8')(
          Et,
          Lt,
          !1,
          function (e) {
            a('wVz3');
          },
          'data-v-79adc6dc',
          null
        ).exports,
        Rt = {
          name: 'RecordList',
          components: {
            'signing-tooltip': Z,
            'leave-type-tooltip': vt,
            'system-notification': se,
            'page-container': nt,
            'employee-info': pe,
            'calendar-controller': It,
          },
          data: function () {
            return {
              calendarDate: new Date(),
              showRejects: !1,
              systemNotification: {
                level: 'warning',
                text: '',
                visible: !1,
                handler: function () {},
              },
              search: '',
              headers: [],
              records: [],
              fullControl: !1,
              profile: {
                id: '',
                employeeID: '',
                dept: '',
                name: '',
                username: '',
                arrivedDate: '',
                level: '',
                email: '',
              },
              pagination: { sortBy: 'appliedDate', descending: !0 },
            };
          },
          computed: {
            filteredRecords: function () {
              var e = this;
              return this.records
                .filter(function (t) {
                  return (
                    e.showRejects ||
                    t.signings.every(function (e) {
                      return e.pass;
                    })
                  );
                })
                .filter(function (t) {
                  return t.dates.some(function (t) {
                    return new Date(t).getFullYear() === e.year;
                  });
                });
            },
            year: function () {
              return this.calendarDate.getFullYear();
            },
          },
          created: function () {
            this.headers = [
              {
                text: this.loalocale.self.appliedDate,
                value: 'appliedDate',
                width: 120,
                sortable: !1,
              },
              { text: this.loalocale.self.dates, value: '', sortable: !1 },
              { text: this.loalocale.self.totals, value: '', sortable: !1 },
              {
                text: this.loalocale.self.leaveType,
                value: 'leaveType',
                width: 160,
                sortable: !1,
              },
              {
                text: this.loalocale.self.remarks,
                value: 'remarks',
                sortable: !1,
              },
              {
                text: this.loalocale.self.signings,
                value: 'signings',
                sortable: !1,
              },
              { text: this.loalocale.self.action, value: '', sortable: !1 },
            ];
          },
          mounted: function () {
            (this.search = this.$route.params.query), this.getRecords();
          },
          methods: {
            download: function () {
              var e = ze.exportEmployee({
                  year: this.year,
                  loginuser: this.loginuser.username,
                  token: this.loginuser.token,
                  username: this.profile.username,
                }),
                t = document.createElement('iframe');
              (t.src = e),
                (t.style = 'display:none'),
                document.body.appendChild(t);
            },
            getRecords: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s, r, l, i, c, d, p, f, v, m;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Ie({
                                id: e.$route.params.id,
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data),
                              (o = n._id),
                              (s = n.employeeID),
                              (r = n.dept),
                              (l = n.name),
                              (i = n.username),
                              (c = n.arrivedDate),
                              (d = n.level),
                              (p = n.activatedLeaveTypes),
                              (f = n.email),
                              (v = n.records),
                              (m = n.fullControl),
                              (e.profile = {
                                employeeID: s,
                                dept: r,
                                name: l,
                                username: i,
                                arrivedDate: c,
                                level: d,
                                email: f,
                                id: o,
                              }),
                              (e.fullControl = m),
                              (e.records = v.map(function (t) {
                                var a = p.find(function (e) {
                                  return e.name === t.leaveType;
                                });
                                return e.combineRecord(t, a);
                              }));
                          case 18:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            combineRecord: function (e, t) {
              var a = p()({}, t, {
                deadline: J.formatDate(t.deadline),
                countdown: J.isLeaveTypeInfoGeneral(t.name),
                localeName: this.loalocale.shared.leaveTypes[t.name],
              });
              return p()({}, e, {
                appliedDate: J.formatDate(e.appliedDate),
                activatedLeaveTypes: a,
                leaveType: J.getLocaleleaveTypeNames(e.leaveType),
              });
            },
            sign: function (e, t, a) {
              var n = this;
              return v()(
                u.a.mark(function o() {
                  var s, r, l, i;
                  return u.a.wrap(
                    function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2),
                              Le({
                                loginuser: n.loginuser.username,
                                token: n.loginuser.token,
                                id: e,
                                recordID: t,
                                pass: a,
                                forced: !0,
                              })
                            );
                          case 2:
                            (s = o.sent),
                              (r = s.data),
                              (l = r.success),
                              (i = r.message),
                              l
                                ? n.getRecords()
                                : ((n.systemNotification.text = J.lookUpCustomMessage(
                                    i
                                  )),
                                  (n.systemNotification.visible = !0));
                          case 7:
                          case 'end':
                            return o.stop();
                        }
                    },
                    o,
                    n
                  );
                })
              )();
            },
            generateConsumeSummary: J.generateConsumeSummary,
            formatDate: J.formatDate,
            generateSummary: J.generateSummary,
          },
        },
        At = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'page-container',
              {
                attrs: {
                  icon: 'person',
                  title: e.profile.name + ' (' + e.profile.username + ')',
                },
                on: {
                  notified: function (t) {
                    return (e.systemNotification = t);
                  },
                },
                scopedSlots: e._u([
                  {
                    key: 'tooltip',
                    fn: function (t) {
                      return [
                        a('employee-info', {
                          attrs: { profile: e.profile, icon: '', email: '' },
                        }),
                      ];
                    },
                  },
                ]),
              },
              [
                e._v(' '),
                a(
                  'v-card',
                  { staticClass: 'elevation-12' },
                  [
                    a(
                      'calendar-controller',
                      {
                        attrs: { annual: '', calendarDate: e.calendarDate },
                        on: {
                          prev: function (t) {
                            return (e.calendarDate = t);
                          },
                          next: function (t) {
                            return (e.calendarDate = t);
                          },
                          tolastest: function (t) {
                            return (e.calendarDate = t);
                          },
                        },
                      },
                      [
                        a('v-switch', {
                          attrs: { label: e.loalocale.self.showRejects },
                          model: {
                            value: e.showRejects,
                            callback: function (t) {
                              e.showRejects = t;
                            },
                            expression: 'showRejects',
                          },
                        }),
                        e._v(' '),
                        a('v-text-field', {
                          attrs: {
                            'append-icon': 'search',
                            label: e.loalocale.self.search,
                            'single-line': '',
                          },
                          model: {
                            value: e.search,
                            callback: function (t) {
                              e.search = t;
                            },
                            expression: 'search',
                          },
                        }),
                        e._v(' '),
                        a('v-spacer'),
                        e._v(' '),
                        a(
                          'v-btn',
                          { on: { click: e.download } },
                          [
                            a('v-icon', [e._v('get_app')]),
                            e._v(
                              '\n        ' +
                                e._s(e.loalocale.self.download) +
                                '\n      '
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(' '),
                    a('v-data-table', {
                      staticClass: 'elevation-1',
                      attrs: {
                        pagination: e.pagination,
                        search: e.search,
                        headers: e.headers,
                        items: e.filteredRecords,
                        'rows-per-page-items': [
                          {
                            text: '$vuetify.dataIterator.rowsPerPageAll',
                            value: -1,
                          },
                        ],
                      },
                      on: {
                        'update:pagination': function (t) {
                          e.pagination = t;
                        },
                      },
                      scopedSlots: e._u([
                        {
                          key: 'items',
                          fn: function (t) {
                            return [
                              a('tr', [
                                a(
                                  'td',
                                  { staticClass: 'min-width-160' },
                                  [
                                    a('v-tooltip', { attrs: { bottom: '' } }, [
                                      a(
                                        'div',
                                        {
                                          attrs: { slot: 'activator' },
                                          slot: 'activator',
                                        },
                                        [e._v(e._s(t.item.appliedDate))]
                                      ),
                                    ]),
                                  ],
                                  1
                                ),
                                e._v(' '),
                                a('td', { staticClass: 'min-width-160' }, [
                                  e._v(
                                    '\n            ' +
                                      e._s(
                                        e.generateSummary(
                                          t.item.dates,
                                          t.item.startFrom,
                                          t.item.endTo
                                        )
                                      ) +
                                      '\n          '
                                  ),
                                ]),
                                e._v(' '),
                                a('td', { staticClass: 'min-width-160' }, [
                                  e._v(
                                    '\n            ' +
                                      e._s(
                                        e.generateConsumeSummary(
                                          t.item.dates,
                                          t.item.startFrom,
                                          t.item.endTo
                                        )
                                      ) +
                                      '\n          '
                                  ),
                                ]),
                                e._v(' '),
                                a(
                                  'td',
                                  { staticClass: 'min-width-120' },
                                  [
                                    a(
                                      'v-tooltip',
                                      { attrs: { bottom: '' } },
                                      [
                                        a(
                                          'div',
                                          {
                                            attrs: { slot: 'activator' },
                                            slot: 'activator',
                                          },
                                          [e._v(e._s(t.item.leaveType))]
                                        ),
                                        e._v(' '),
                                        a('leave-type-tooltip', {
                                          attrs: {
                                            info: t.item.activatedLeaveTypes,
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                e._v(' '),
                                a('td', { staticClass: 'min-width-100' }, [
                                  e._v(e._s(t.item.remarks)),
                                ]),
                                e._v(' '),
                                a(
                                  'td',
                                  e._l(t.item.signings, function (n) {
                                    return a(
                                      'div',
                                      { key: n._id },
                                      [
                                        a(
                                          'v-tooltip',
                                          { attrs: { bottom: '' } },
                                          [
                                            a(
                                              'v-chip',
                                              {
                                                attrs: {
                                                  slot: 'activator',
                                                  color: n.pass
                                                    ? 'green'
                                                    : 'red',
                                                  'text-color': 'white',
                                                },
                                                slot: 'activator',
                                              },
                                              [
                                                e._v(
                                                  e._s(n.name) +
                                                    ' [' +
                                                    e._s(
                                                      n.pass
                                                        ? e.loalocale.self.pass
                                                        : e.loalocale.self
                                                            .reject
                                                    ) +
                                                    ']'
                                                ),
                                              ]
                                            ),
                                            e._v(' '),
                                            e._l(t.item.signers, function (e) {
                                              return a('signing-tooltip', {
                                                key: e._id,
                                                attrs: {
                                                  signer: e,
                                                  signings: t.item.signings,
                                                },
                                              });
                                            }),
                                          ],
                                          2
                                        ),
                                      ],
                                      1
                                    );
                                  }),
                                  0
                                ),
                                e._v(' '),
                                a(
                                  'td',
                                  [
                                    a(
                                      'v-tooltip',
                                      { attrs: { bottom: '' } },
                                      [
                                        e.fullControl &&
                                        t.item.signings.every(function (e) {
                                          return e.pass;
                                        })
                                          ? a(
                                              'v-btn',
                                              {
                                                attrs: {
                                                  slot: 'activator',
                                                  icon: '',
                                                  ripple: '',
                                                },
                                                on: {
                                                  click: function (a) {
                                                    return e.sign(
                                                      e.profile.id,
                                                      t.item._id,
                                                      !1
                                                    );
                                                  },
                                                },
                                                slot: 'activator',
                                              },
                                              [
                                                a(
                                                  'v-icon',
                                                  { attrs: { color: 'red' } },
                                                  [e._v('pan_tool')]
                                                ),
                                              ],
                                              1
                                            )
                                          : e._e(),
                                        e._v(' '),
                                        a('div', [
                                          e._v(e._s(e.loalocale.self.reject)),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                            ];
                          },
                        },
                      ]),
                    }),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'system-notification',
                  {
                    on: {
                      close: function (t) {
                        e.systemNotification.visible = !1;
                      },
                    },
                    model: {
                      value: e.systemNotification,
                      callback: function (t) {
                        e.systemNotification = t;
                      },
                      expression: 'systemNotification',
                    },
                  },
                  [a('div', [e._v(e._s(e.systemNotification.text))])]
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var St = a('VU/8')(
          Rt,
          At,
          !1,
          function (e) {
            a('m5ff');
          },
          'data-v-0757b7e1',
          null
        ).exports,
        $t = {
          name: 'MonthlyReport',
          components: {
            'page-container': nt,
            'calendar-controller': It,
            'employee-info': pe,
          },
          data: function () {
            return {
              calendarDate: new Date(),
              headers: [],
              employees: [],
              fullControl: !1,
              showResigners: !1,
              loading: !1,
            };
          },
          computed: {
            filteredEmployees: function () {
              var e = this;
              return this.employees.filter(function (t) {
                return e.showResigners || t.enabled;
              });
            },
            year: function () {
              return this.calendarDate.getFullYear();
            },
            month: function () {
              return this.calendarDate.getMonth() + 1;
            },
          },
          created: function () {
            var e = this;
            [
              {
                text: this.loalocale.self.employeeInfo,
                sortable: !1,
                width: '200',
              },
              { text: this.loalocale.self.dateGroupStat, sortable: !1 },
              { text: this.loalocale.self.leaveTypeGroupStat, sortable: !1 },
            ].forEach(function (t) {
              return e.headers.push(t);
            });
          },
          mounted: function () {
            this.getRecords();
          },
          methods: {
            download: function () {
              var e = ze.exportReport({
                  year: this.year,
                  month: this.month,
                  loginuser: this.loginuser.username,
                  token: this.loginuser.token,
                  period: 'monthly',
                }),
                t = document.createElement('iframe');
              (t.src = e),
                (t.style = 'display:none'),
                document.body.appendChild(t);
            },
            getRecords: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e.loading = !0),
                              (t.next = 3),
                              _e({
                                year: e.year,
                                month: e.month,
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                              })
                            );
                          case 3:
                            (a = t.sent),
                              (n = a.data),
                              (o = n.report),
                              (s = n.fullControl),
                              (e.loading = !1),
                              (e.employees = o),
                              (e.fullControl = s);
                          case 10:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            generateSummary: Je.generateSummary,
            generateleaveTypeClass: Je.generateleaveTypeClass,
          },
          watch: {
            calendarDate: function () {
              this.getRecords();
            },
          },
        },
        Ut = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-app',
              { attrs: { id: 'inspire' } },
              [
                a(
                  'page-container',
                  {
                    attrs: { title: e.loalocale.self.title, icon: 'view_list' },
                  },
                  [
                    a(
                      'v-card',
                      { staticClass: 'elevation-12' },
                      [
                        a(
                          'calendar-controller',
                          {
                            attrs: { calendarDate: e.calendarDate },
                            on: {
                              prev: function (t) {
                                return (e.calendarDate = t);
                              },
                              next: function (t) {
                                return (e.calendarDate = t);
                              },
                              tolastest: function (t) {
                                return (e.calendarDate = t);
                              },
                            },
                          },
                          [
                            e.fullControl
                              ? a('v-switch', {
                                  attrs: {
                                    label: e.loalocale.self.showResigners,
                                  },
                                  model: {
                                    value: e.showResigners,
                                    callback: function (t) {
                                      e.showResigners = t;
                                    },
                                    expression: 'showResigners',
                                  },
                                })
                              : e._e(),
                            e._v(' '),
                            e.loading
                              ? e._e()
                              : a(
                                  'v-btn',
                                  { on: { click: e.download } },
                                  [
                                    a('v-icon', [e._v('get_app')]),
                                    e._v(
                                      '\n          ' +
                                        e._s(e.loalocale.self.download) +
                                        '\n        '
                                    ),
                                  ],
                                  1
                                ),
                          ],
                          1
                        ),
                        e._v(' '),
                        e.loading
                          ? a('v-progress-linear', {
                              attrs: { indeterminate: !0 },
                            })
                          : a('v-data-table', {
                              attrs: {
                                headers: e.headers,
                                items: e.filteredEmployees,
                                'item-key': '_id',
                                'rows-per-page-items': [
                                  {
                                    text:
                                      '$vuetify.dataIterator.rowsPerPageAll',
                                    value: -1,
                                  },
                                ],
                              },
                              scopedSlots: e._u([
                                {
                                  key: 'items',
                                  fn: function (t) {
                                    return [
                                      a('tr', [
                                        a(
                                          'td',
                                          { staticClass: 'min-width-160' },
                                          [
                                            a('employee-info', {
                                              attrs: { profile: t.item },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(' '),
                                        a(
                                          'td',
                                          { staticClass: 'min-width-380' },
                                          [
                                            a('v-data-iterator', {
                                              attrs: {
                                                items: t.item.recordGroups.filter(
                                                  function (e) {
                                                    return e.list.length > 0;
                                                  }
                                                ),
                                                'rows-per-page-items': [31],
                                                'content-tag': 'v-layout',
                                                row: '',
                                                wrap: '',
                                                'hide-actions': '',
                                              },
                                              scopedSlots: e._u([
                                                {
                                                  key: 'item',
                                                  fn: function (t) {
                                                    return a(
                                                      'v-flex',
                                                      { attrs: { xs6: '' } },
                                                      [
                                                        a(
                                                          'v-card',
                                                          [
                                                            a('v-card-title', [
                                                              a('h4', [
                                                                e._v(
                                                                  '\n                        ' +
                                                                    e._s(
                                                                      t.item
                                                                        .day + 1
                                                                    ) +
                                                                    e._s(
                                                                      e
                                                                        .loalocale
                                                                        .self
                                                                        .day
                                                                    ) +
                                                                    '\n                      '
                                                                ),
                                                              ]),
                                                            ]),
                                                            e._v(' '),
                                                            a('v-divider'),
                                                            e._v(' '),
                                                            a(
                                                              'v-list',
                                                              {
                                                                attrs: {
                                                                  dense: '',
                                                                },
                                                              },
                                                              e._l(
                                                                t.item.list,
                                                                function (
                                                                  t,
                                                                  n
                                                                ) {
                                                                  return a(
                                                                    'v-list-tile',
                                                                    {
                                                                      key: n,
                                                                      class: e.generateleaveTypeClass(
                                                                        t.key
                                                                      ),
                                                                    },
                                                                    [
                                                                      a(
                                                                        'v-list-tile-content',
                                                                        [
                                                                          e._v(
                                                                            e._s(
                                                                              e.generateSummary(
                                                                                {
                                                                                  leaveType:
                                                                                    t.key,
                                                                                  days:
                                                                                    t
                                                                                      .totals
                                                                                      .days >
                                                                                    0
                                                                                      ? 1
                                                                                      : 0,
                                                                                  hours:
                                                                                    t
                                                                                      .totals
                                                                                      .hours,
                                                                                }
                                                                              )
                                                                            )
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ],
                                                                    1
                                                                  );
                                                                }
                                                              ),
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ],
                                                      1
                                                    );
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(' '),
                                        a(
                                          'td',
                                          { staticClass: 'min-width-380' },
                                          [
                                            a('v-data-iterator', {
                                              attrs: {
                                                items: t.item.leaveTypeGroups,
                                                'rows-per-page-items': [
                                                  t.item.leaveTypeGroups.length,
                                                ],
                                                'content-tag': 'v-layout',
                                                row: '',
                                                wrap: '',
                                                'hide-actions': '',
                                              },
                                              scopedSlots: e._u([
                                                {
                                                  key: 'item',
                                                  fn: function (t) {
                                                    return a(
                                                      'v-flex',
                                                      { attrs: { xs6: '' } },
                                                      [
                                                        a(
                                                          'v-card',
                                                          [
                                                            a(
                                                              'v-list',
                                                              {
                                                                attrs: {
                                                                  dense: '',
                                                                },
                                                              },
                                                              [
                                                                a(
                                                                  'v-list-tile',
                                                                  {
                                                                    class: e.generateleaveTypeClass(
                                                                      t.item.key
                                                                    ),
                                                                  },
                                                                  [
                                                                    a(
                                                                      'v-list-tile-content',
                                                                      [
                                                                        e._v(
                                                                          e._s(
                                                                            e.generateSummary(
                                                                              {
                                                                                leaveType:
                                                                                  t
                                                                                    .item
                                                                                    .key,
                                                                                days:
                                                                                  t
                                                                                    .item
                                                                                    .totals
                                                                                    .days,
                                                                                hours:
                                                                                  t
                                                                                    .item
                                                                                    .totals
                                                                                    .hours,
                                                                              }
                                                                            )
                                                                          )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ],
                                                                  1
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ],
                                                      1
                                                    );
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ];
                                  },
                                },
                              ]),
                            }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var Ot = a('VU/8')(
          $t,
          Ut,
          !1,
          function (e) {
            a('hWTA');
          },
          'data-v-5442e538',
          null
        ).exports,
        Nt = {
          name: 'AnnualReport',
          components: {
            'page-container': nt,
            'calendar-controller': It,
            'employee-info': pe,
          },
          data: function () {
            return {
              calendarDate: new Date(),
              headers: [],
              employees: [],
              fullControl: !1,
              showResigners: !1,
              loading: !1,
            };
          },
          computed: {
            filteredEmployees: function () {
              var e = this;
              return this.employees.filter(function (t) {
                return e.showResigners || t.enabled;
              });
            },
            year: function () {
              return this.calendarDate.getFullYear();
            },
          },
          created: function () {
            var e = this;
            [
              {
                text: this.loalocale.self.employeeInfo,
                sortable: !1,
                width: '200',
              },
              { text: this.loalocale.self.monthGroupStat, sortable: !1 },
              { text: this.loalocale.self.leaveTypeGroupStat, sortable: !1 },
              { text: this.loalocale.self.annualStat, sortable: !1 },
            ].forEach(function (t) {
              return e.headers.push(t);
            });
          },
          mounted: function () {
            this.getRecords();
          },
          methods: {
            download: function () {
              var e = ze.exportReport({
                  year: this.year,
                  loginuser: this.loginuser.username,
                  token: this.loginuser.token,
                  period: 'annual',
                }),
                t = document.createElement('iframe');
              (t.src = e),
                (t.style = 'display:none'),
                document.body.appendChild(t);
            },
            getRecords: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e.loading = !0),
                              (t.next = 3),
                              ge({
                                year: e.year,
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                              })
                            );
                          case 3:
                            (a = t.sent),
                              (n = a.data),
                              (o = n.report),
                              (s = n.fullControl),
                              (e.loading = !1),
                              (e.employees = o),
                              (e.fullControl = s);
                          case 10:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            generateSummary: Je.generateSummary,
            generateleaveTypeClass: Je.generateleaveTypeClass,
          },
          watch: {
            calendarDate: function () {
              this.getRecords();
            },
          },
        },
        Bt = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-app',
              { staticClass: 'annual-report', attrs: { id: 'inspire' } },
              [
                a(
                  'page-container',
                  {
                    attrs: { title: e.loalocale.self.title, icon: 'view_list' },
                  },
                  [
                    a(
                      'v-card',
                      { staticClass: 'elevation-12' },
                      [
                        a(
                          'calendar-controller',
                          {
                            attrs: { annual: '', calendarDate: e.calendarDate },
                            on: {
                              prev: function (t) {
                                return (e.calendarDate = t);
                              },
                              next: function (t) {
                                return (e.calendarDate = t);
                              },
                              tolastest: function (t) {
                                return (e.calendarDate = t);
                              },
                            },
                          },
                          [
                            e.fullControl && !e.loading
                              ? a('v-switch', {
                                  attrs: {
                                    label: e.loalocale.self.showResigners,
                                  },
                                  model: {
                                    value: e.showResigners,
                                    callback: function (t) {
                                      e.showResigners = t;
                                    },
                                    expression: 'showResigners',
                                  },
                                })
                              : e._e(),
                            e._v(' '),
                            e.loading
                              ? e._e()
                              : a(
                                  'v-btn',
                                  { on: { click: e.download } },
                                  [
                                    a('v-icon', [e._v('get_app')]),
                                    e._v(
                                      '\n          ' +
                                        e._s(e.loalocale.self.download) +
                                        '\n        '
                                    ),
                                  ],
                                  1
                                ),
                          ],
                          1
                        ),
                        e._v(' '),
                        e.loading
                          ? a('v-progress-linear', {
                              attrs: { indeterminate: !0 },
                            })
                          : a('v-data-table', {
                              attrs: {
                                headers: e.headers,
                                items: e.filteredEmployees,
                                'item-key': '_id',
                                'rows-per-page-items': [
                                  {
                                    text:
                                      '$vuetify.dataIterator.rowsPerPageAll',
                                    value: -1,
                                  },
                                ],
                              },
                              scopedSlots: e._u([
                                {
                                  key: 'items',
                                  fn: function (t) {
                                    return [
                                      a('tr', [
                                        a(
                                          'td',
                                          { staticClass: 'min-width-160' },
                                          [
                                            a('employee-info', {
                                              attrs: { profile: t.item },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(' '),
                                        a(
                                          'td',
                                          { staticClass: 'min-width-380' },
                                          [
                                            a('v-data-iterator', {
                                              attrs: {
                                                items: t.item.recordGroups.filter(
                                                  function (e) {
                                                    return e.list.length > 0;
                                                  }
                                                ),
                                                'rows-per-page-items': [12],
                                                'content-tag': 'v-layout',
                                                row: '',
                                                wrap: '',
                                                'hide-actions': '',
                                              },
                                              scopedSlots: e._u([
                                                {
                                                  key: 'item',
                                                  fn: function (t) {
                                                    return a(
                                                      'v-flex',
                                                      { attrs: { xs6: '' } },
                                                      [
                                                        a(
                                                          'v-card',
                                                          [
                                                            a('v-card-title', [
                                                              a('h4', [
                                                                e._v(
                                                                  '\n                        ' +
                                                                    e._s(
                                                                      t.item
                                                                        .month +
                                                                        1
                                                                    ) +
                                                                    e._s(
                                                                      e
                                                                        .loalocale
                                                                        .self
                                                                        .month
                                                                    ) +
                                                                    '\n                      '
                                                                ),
                                                              ]),
                                                            ]),
                                                            e._v(' '),
                                                            a('v-divider'),
                                                            e._v(' '),
                                                            a(
                                                              'v-list',
                                                              {
                                                                attrs: {
                                                                  dense: '',
                                                                },
                                                              },
                                                              e._l(
                                                                t.item.list,
                                                                function (
                                                                  t,
                                                                  n
                                                                ) {
                                                                  return a(
                                                                    'v-list-tile',
                                                                    {
                                                                      key: n,
                                                                      class: e.generateleaveTypeClass(
                                                                        t.key
                                                                      ),
                                                                    },
                                                                    [
                                                                      a(
                                                                        'v-list-tile-content',
                                                                        [
                                                                          e._v(
                                                                            e._s(
                                                                              e.generateSummary(
                                                                                {
                                                                                  leaveType:
                                                                                    t.key,
                                                                                  days:
                                                                                    t
                                                                                      .totals
                                                                                      .days,
                                                                                  hours:
                                                                                    t
                                                                                      .totals
                                                                                      .hours,
                                                                                }
                                                                              )
                                                                            )
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ],
                                                                    1
                                                                  );
                                                                }
                                                              ),
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ],
                                                      1
                                                    );
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(' '),
                                        a(
                                          'td',
                                          { staticClass: 'min-width-380' },
                                          [
                                            a('v-data-iterator', {
                                              attrs: {
                                                items: t.item.leaveTypeGroups,
                                                'rows-per-page-items': [
                                                  t.item.leaveTypeGroups.length,
                                                ],
                                                'content-tag': 'v-layout',
                                                row: '',
                                                wrap: '',
                                                'hide-actions': '',
                                              },
                                              scopedSlots: e._u([
                                                {
                                                  key: 'item',
                                                  fn: function (t) {
                                                    return a(
                                                      'v-flex',
                                                      { attrs: { xs6: '' } },
                                                      [
                                                        a(
                                                          'v-card',
                                                          [
                                                            a(
                                                              'v-list',
                                                              {
                                                                attrs: {
                                                                  dense: '',
                                                                },
                                                              },
                                                              [
                                                                a(
                                                                  'v-list-tile',
                                                                  {
                                                                    class: e.generateleaveTypeClass(
                                                                      t.item.key
                                                                    ),
                                                                  },
                                                                  [
                                                                    a(
                                                                      'v-list-tile-content',
                                                                      [
                                                                        e._v(
                                                                          e._s(
                                                                            e.generateSummary(
                                                                              {
                                                                                leaveType:
                                                                                  t
                                                                                    .item
                                                                                    .key,
                                                                                days:
                                                                                  t
                                                                                    .item
                                                                                    .totals
                                                                                    .days,
                                                                                hours:
                                                                                  t
                                                                                    .item
                                                                                    .totals
                                                                                    .hours,
                                                                              }
                                                                            )
                                                                          )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ],
                                                                  1
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ],
                                                      1
                                                    );
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(' '),
                                        a(
                                          'td',
                                          [
                                            a('v-data-iterator', {
                                              attrs: {
                                                items: t.item.annualInfo,
                                                'rows-per-page-items': [
                                                  t.item.annualInfo.length,
                                                ],
                                                'content-tag': 'v-layout',
                                                row: '',
                                                wrap: '',
                                                'hide-actions': '',
                                              },
                                              scopedSlots: e._u([
                                                {
                                                  key: 'item',
                                                  fn: function (t) {
                                                    return a(
                                                      'v-flex',
                                                      {},
                                                      [
                                                        a(
                                                          'v-card',
                                                          [
                                                            a('v-card-title', [
                                                              a('h4', [
                                                                e._v(
                                                                  e._s(
                                                                    t.item
                                                                      .deadline
                                                                  )
                                                                ),
                                                              ]),
                                                            ]),
                                                            e._v(' '),
                                                            a('v-divider'),
                                                            e._v(' '),
                                                            a(
                                                              'v-list',
                                                              {
                                                                attrs: {
                                                                  dense: '',
                                                                },
                                                              },
                                                              [
                                                                a(
                                                                  'v-list-tile',
                                                                  [
                                                                    a(
                                                                      'v-list-tile-content',
                                                                      [
                                                                        e._v(
                                                                          e._s(
                                                                            t
                                                                              .item
                                                                              .totals
                                                                              .days
                                                                          ) +
                                                                            '/' +
                                                                            e._s(
                                                                              t
                                                                                .item
                                                                                .totalDays
                                                                            )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ],
                                                                  1
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ],
                                                      1
                                                    );
                                                  },
                                                },
                                              ]),
                                            }),
                                            e._v(' '),
                                            a('v-data-iterator', {
                                              attrs: {
                                                items: [t.item.actualTotalDays],
                                                'rows-per-page-items': 1,
                                                'content-tag': 'v-layout',
                                                row: '',
                                                wrap: '',
                                                'hide-actions': '',
                                              },
                                              scopedSlots: e._u([
                                                {
                                                  key: 'item',
                                                  fn: function (t) {
                                                    return a(
                                                      'v-flex',
                                                      {},
                                                      [
                                                        a(
                                                          'v-card',
                                                          [
                                                            a('v-card-title', [
                                                              a('h4', [
                                                                e._v(
                                                                  '實際天數'
                                                                ),
                                                              ]),
                                                            ]),
                                                            e._v(' '),
                                                            a('v-divider'),
                                                            e._v(' '),
                                                            a(
                                                              'v-list',
                                                              {
                                                                attrs: {
                                                                  dense: '',
                                                                },
                                                              },
                                                              [
                                                                a(
                                                                  'v-list-tile',
                                                                  [
                                                                    a(
                                                                      'v-list-tile-content',
                                                                      [
                                                                        e._v(
                                                                          e._s(
                                                                            t.item
                                                                          )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ],
                                                                  1
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ],
                                                      1
                                                    );
                                                  },
                                                },
                                              ]),
                                            }),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ];
                                  },
                                },
                              ]),
                            }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var Ht = a('VU/8')(
          Nt,
          Bt,
          !1,
          function (e) {
            a('2j43');
          },
          null,
          null
        ).exports,
        Mt = {
          name: 'LeaveTypeBlock',
          props: { leaveType: { type: Object } },
          data: function () {
            return {};
          },
          methods: { generateleaveTypeSummary: Je.generateleaveTypeSummary },
        },
        Pt = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-list-tile',
              [
                a(
                  'v-list-tile-content',
                  [
                    a('v-list-tile-title', [
                      e._v(
                        e._s(
                          e.loalocale.shared.leaveTypes[e.leaveType.leaveType]
                            ? e.loalocale.shared.leaveTypes[
                                e.leaveType.leaveType
                              ]
                            : e.leaveType.leaveType
                        )
                      ),
                    ]),
                    e._v(' '),
                    a('v-list-tile-sub-title', [
                      e._v(
                        e._s(e.generateleaveTypeSummary(e.leaveType.daysNHours))
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var zt = {
          name: 'CompensatoryList',
          data: function () {
            return {
              showAllHavingCompensatoryLT: !1,
              calendarDate: new Date(),
              search: '',
              headers: [],
              employees: [],
              fullControl: !1,
              showResigners: !1,
              compensatoryKeyword: '',
              systemNotification: {
                level: 'warning',
                text: '',
                visible: !1,
                handler: function () {},
              },
            };
          },
          components: {
            'employee-action': y,
            'system-notification': se,
            'leave-type-block': a('VU/8')(
              Mt,
              Pt,
              !1,
              function (e) {
                a('llO3');
              },
              null,
              null
            ).exports,
            'page-container': nt,
            'calendar-controller': It,
          },
          computed: {
            filteredEmployees: function () {
              var e = this;
              return this.employees
                .filter(function (t) {
                  return e.showResigners || t.enabled;
                })
                .filter(function (t) {
                  return (
                    e.showAllHavingCompensatoryLT ||
                    t.leaveTypes.some(function (t) {
                      return new Date(t.date).getFullYear() === e.year;
                    })
                  );
                });
            },
            year: function () {
              return this.calendarDate.getFullYear();
            },
          },
          created: function () {
            (this.compensatoryKeyword = K.compensatory.keyword),
              (this.headers = [
                {
                  text: this.loalocale.self.employeeID,
                  value: 'employeeID',
                  sortable: !1,
                },
                { text: this.loalocale.self.name, value: 'name', sortable: !1 },
                {
                  text: this.loalocale.self.username,
                  value: 'username',
                  sortable: !1,
                },
                { text: this.loalocale.self.dept, value: 'dept', sortable: !1 },
                {
                  text: this.loalocale.self.arrivedDate,
                  value: 'arrivedDate',
                  sortable: !1,
                },
                {
                  text: this.loalocale.self.compensatory,
                  value: 'compensatory',
                  sortable: !1,
                },
                { text: this.loalocale.self.action, value: '', sortable: !1 },
              ]);
          },
          mounted: function () {
            this.getEmployees();
          },
          methods: {
            filterLeaveTypes: function (e) {
              var t = this;
              return e.filter(function (e) {
                return new Date(e.date).getFullYear() === t.year;
              });
            },
            download: function () {
              var e = ze.exportCompensatory({
                  year: this.year,
                  loginuser: this.loginuser.username,
                  token: this.loginuser.token,
                }),
                t = document.createElement('iframe');
              (t.src = e),
                (t.style = 'display:none'),
                document.body.appendChild(t);
            },
            getEmployees: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Se({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                year: e.year,
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data),
                              (o = n.employees),
                              (s = n.fullControl),
                              (e.employees = o),
                              (e.fullControl = s);
                          case 8:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            generateleaveTypeSummary: Je.generateleaveTypeSummary,
            formatDate: J.formatDate,
          },
        },
        jt = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'page-container',
              {
                attrs: {
                  title: e.loalocale.self.title,
                  icon: 'event_available',
                },
                on: {
                  notified: function (t) {
                    return (e.systemNotification = t);
                  },
                },
              },
              [
                a(
                  'v-card',
                  { staticClass: 'elevation-12' },
                  [
                    a(
                      'calendar-controller',
                      {
                        attrs: { annual: '', calendarDate: e.calendarDate },
                        on: {
                          prev: function (t) {
                            return (e.calendarDate = t);
                          },
                          next: function (t) {
                            return (e.calendarDate = t);
                          },
                          tolastest: function (t) {
                            return (e.calendarDate = t);
                          },
                        },
                      },
                      [
                        e.fullControl
                          ? a('v-switch', {
                              attrs: { label: e.loalocale.self.showResigners },
                              model: {
                                value: e.showResigners,
                                callback: function (t) {
                                  e.showResigners = t;
                                },
                                expression: 'showResigners',
                              },
                            })
                          : e._e(),
                        e._v(' '),
                        e.fullControl
                          ? a('v-switch', {
                              attrs: {
                                label:
                                  e.loalocale.self.showAllHavingCompensatoryLT,
                              },
                              model: {
                                value: e.showAllHavingCompensatoryLT,
                                callback: function (t) {
                                  e.showAllHavingCompensatoryLT = t;
                                },
                                expression: 'showAllHavingCompensatoryLT',
                              },
                            })
                          : e._e(),
                        e._v(' '),
                        a('v-text-field', {
                          attrs: {
                            'append-icon': 'search',
                            label: e.loalocale.self.search,
                            'hide-details': '',
                          },
                          model: {
                            value: e.search,
                            callback: function (t) {
                              e.search = t;
                            },
                            expression: 'search',
                          },
                        }),
                        e._v(' '),
                        a('v-spacer'),
                        e._v(' '),
                        a(
                          'v-btn',
                          { on: { click: e.download } },
                          [
                            a('v-icon', [e._v('get_app')]),
                            e._v(
                              '\n        ' +
                                e._s(e.loalocale.self.download) +
                                '\n      '
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(' '),
                    a('v-data-table', {
                      attrs: {
                        'must-sort': '',
                        search: e.search,
                        headers: e.headers,
                        items: e.filteredEmployees,
                        'item-key': '_id',
                        'rows-per-page-items': [
                          {
                            text: '$vuetify.dataIterator.rowsPerPageAll',
                            value: -1,
                          },
                        ],
                      },
                      scopedSlots: e._u([
                        {
                          key: 'items',
                          fn: function (t) {
                            return [
                              a(
                                'tr',
                                {
                                  class: t.item.enabled ? '' : 'disabled',
                                  on: {
                                    click: function (e) {
                                      t.expanded = !t.expanded;
                                    },
                                  },
                                },
                                [
                                  a('td', [e._v(e._s(t.item.employeeID))]),
                                  e._v(' '),
                                  a('td', [e._v(e._s(t.item.name))]),
                                  e._v(' '),
                                  a('td', [e._v(e._s(t.item.username))]),
                                  e._v(' '),
                                  a('td', { staticClass: 'min-width-120' }, [
                                    e._v(e._s(t.item.dept)),
                                  ]),
                                  e._v(' '),
                                  a('td', { staticClass: 'min-width-120' }, [
                                    e._v(
                                      e._s(e.formatDate(t.item.arrivedDate))
                                    ),
                                  ]),
                                  e._v(' '),
                                  a('td', { staticClass: 'min-width-160' }, [
                                    e._v(
                                      e._s(
                                        e.generateleaveTypeSummary(
                                          t.item.totals
                                        )
                                      )
                                    ),
                                  ]),
                                  e._v(' '),
                                  a(
                                    'td',
                                    { staticClass: 'min-width-120' },
                                    [
                                      a('employee-action', {
                                        key: t.item._id,
                                        attrs: {
                                          employee: t.item,
                                          query: e.compensatoryKeyword,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ];
                          },
                        },
                        {
                          key: 'expand',
                          fn: function (t) {
                            return [
                              a(
                                'v-card',
                                { attrs: { flat: '' } },
                                [
                                  t.item.enabled
                                    ? a(
                                        'v-list',
                                        e._l(
                                          e.filterLeaveTypes(t.item.leaveTypes),
                                          function (e) {
                                            return a('leave-type-block', {
                                              key: e._id,
                                              attrs: {
                                                employee: t.item,
                                                leaveType: e,
                                              },
                                            });
                                          }
                                        ),
                                        1
                                      )
                                    : e._e(),
                                ],
                                1
                              ),
                            ];
                          },
                        },
                      ]),
                    }),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'system-notification',
                  {
                    on: {
                      close: function (t) {
                        e.systemNotification.visible = !1;
                      },
                    },
                    model: {
                      value: e.systemNotification,
                      callback: function (t) {
                        e.systemNotification = t;
                      },
                      expression: 'systemNotification',
                    },
                  },
                  [a('div', [e._v(e._s(e.systemNotification.text))])]
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var Yt = a('VU/8')(
          zt,
          jt,
          !1,
          function (e) {
            a('5cJC');
          },
          'data-v-2ef9cc58',
          null
        ).exports,
        Gt = {
          name: 'Login',
          data: function () {
            return {
              showingPWD: !1,
              valid: !1,
              username: '',
              rules: { username: [], password: [] },
              password: '',
              status: { failed: !1, message: '' },
              config: me,
            };
          },
          created: function () {
            var e = this;
            (this.rules.username = [
              function (t) {
                return !!t || e.loalocale.self.noempty;
              },
              function (t) {
                return (
                  /^[a-zA-Z0-9/.]+$/.test(t) || e.loalocale.self.notengname
                );
              },
            ]),
              (this.rules.password = [
                function (t) {
                  return !!t || e.loalocale.self.noempty;
                },
              ]);
          },
          mounted: function () {
            this.valid = !1;
          },
          methods: {
            login: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s, r, l;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!e.$refs.form.validate()) {
                              t.next = 10;
                              break;
                            }
                            return (
                              (t.next = 3),
                              be({ username: e.username, password: e.password })
                            );
                          case 3:
                            (a = t.sent),
                              (n = a.data),
                              (o = n.success),
                              (s = n.loginuser),
                              (r = n.message),
                              (l = n.logs),
                              o
                                ? (e.$cookie.set(
                                    'loasystem.loginuser',
                                    it()(s),
                                    { expires: K.cookie.expiredPeriod.oneHour }
                                  ),
                                  e.$router.push({
                                    name: 'List',
                                    params: { logs: l },
                                  }))
                                : (e.status = {
                                    failed: !0,
                                    message: J.lookUpCustomMessage(r),
                                  });
                          case 10:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
          },
        },
        Vt = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-app',
              [
                a(
                  'v-content',
                  [
                    a(
                      'v-container',
                      { attrs: { fluid: '', 'fill-height': '' } },
                      [
                        a(
                          'v-layout',
                          {
                            attrs: { 'align-center': '', 'justify-center': '' },
                          },
                          [
                            a(
                              'v-flex',
                              { attrs: { xs12: '', sm8: '', md4: '' } },
                              [
                                a(
                                  'v-card',
                                  { staticClass: 'elevation-12' },
                                  [
                                    a(
                                      'v-toolbar',
                                      { staticClass: 'theme' },
                                      [
                                        a(
                                          'v-tooltip',
                                          { attrs: { bottom: '' } },
                                          [
                                            a(
                                              'v-toolbar-title',
                                              {
                                                attrs: { slot: 'activator' },
                                                slot: 'activator',
                                              },
                                              [
                                                e._v(
                                                  e._s(e.loalocale.self.title)
                                                ),
                                              ]
                                            ),
                                            e._v(' '),
                                            a('span', [
                                              e._v(
                                                e._s(e.loalocale.self.tooltip)
                                              ),
                                            ]),
                                          ],
                                          1
                                        ),
                                        e._v(' '),
                                        a('v-img', {
                                          attrs: {
                                            position: 'right',
                                            src: './LOASystem/static/logo.svg',
                                            'aspect-ratio': '6',
                                            contain: '',
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(' '),
                                    a(
                                      'v-card-text',
                                      [
                                        a(
                                          'v-form',
                                          {
                                            ref: 'form',
                                            attrs: { 'lazy-validation': '' },
                                            model: {
                                              value: e.valid,
                                              callback: function (t) {
                                                e.valid = t;
                                              },
                                              expression: 'valid',
                                            },
                                          },
                                          [
                                            a('v-text-field', {
                                              attrs: {
                                                'prepend-icon': 'person',
                                                name: 'username',
                                                label:
                                                  e.loalocale.self.username,
                                                type: 'text',
                                                rules: e.rules.username,
                                                required: '',
                                                autocomplete: 'username',
                                              },
                                              model: {
                                                value: e.username,
                                                callback: function (t) {
                                                  e.username = t;
                                                },
                                                expression: 'username',
                                              },
                                            }),
                                            e._v(' '),
                                            a('v-text-field', {
                                              attrs: {
                                                'append-icon': e.showingPWD
                                                  ? 'visibility_off'
                                                  : 'visibility',
                                                'prepend-icon': 'lock',
                                                name: 'password',
                                                label:
                                                  e.loalocale.self.password,
                                                type: e.showingPWD
                                                  ? 'text'
                                                  : 'password',
                                                rules: e.rules.password,
                                                required: '',
                                                autocomplete:
                                                  'current-password',
                                              },
                                              on: {
                                                'click:append': function (t) {
                                                  e.showingPWD = !e.showingPWD;
                                                },
                                                keyup: function (t) {
                                                  return 'keyCode' in t &&
                                                    e._k(
                                                      t.keyCode,
                                                      'enter',
                                                      13,
                                                      t.key,
                                                      'Enter'
                                                    )
                                                    ? null
                                                    : e.login(t);
                                                },
                                              },
                                              model: {
                                                value: e.password,
                                                callback: function (t) {
                                                  e.password = t;
                                                },
                                                expression: 'password',
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(' '),
                                        a(
                                          'v-alert',
                                          {
                                            attrs: {
                                              outline: '',
                                              type: 'error',
                                            },
                                            model: {
                                              value: e.status.failed,
                                              callback: function (t) {
                                                e.$set(e.status, 'failed', t);
                                              },
                                              expression: 'status.failed',
                                            },
                                          },
                                          [e._v(e._s(e.status.message))]
                                        ),
                                        e._v(' '),
                                        e.config.dev
                                          ? a(
                                              'v-chip',
                                              {
                                                attrs: {
                                                  label: '',
                                                  outline: '',
                                                  color: 'primary',
                                                },
                                              },
                                              [
                                                a(
                                                  'v-icon',
                                                  { attrs: { left: '' } },
                                                  [e._v('storage')]
                                                ),
                                                e._v(
                                                  '\n                ' +
                                                    e._s(
                                                      e.config.API_URL.replace(
                                                        'http://',
                                                        ''
                                                      ).replace('https://', '')
                                                    ) +
                                                    '\n              '
                                                ),
                                              ],
                                              1
                                            )
                                          : e._e(),
                                      ],
                                      1
                                    ),
                                    e._v(' '),
                                    a(
                                      'v-card-actions',
                                      [
                                        a(
                                          'v-tooltip',
                                          { attrs: { bottom: '' } },
                                          [
                                            a(
                                              'a',
                                              {
                                                attrs: {
                                                  slot: 'activator',
                                                  href:
                                                    'https://qr-official.line.me/sid/L/319dfdjs.png',
                                                  target: '_blank',
                                                },
                                                slot: 'activator',
                                              },
                                              [
                                                a('v-img', {
                                                  attrs: {
                                                    contain: '',
                                                    height: '50',
                                                    width: '50',
                                                    src:
                                                      '../LOASystem/static/LINE_APP.png',
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            e._v(' '),
                                            a('span', [
                                              e._v(
                                                '快加入好友，立即掌握請假與簽核訊息'
                                              ),
                                            ]),
                                          ]
                                        ),
                                        e._v(' '),
                                        a('v-spacer'),
                                        e._v(' '),
                                        a(
                                          'v-tooltip',
                                          { attrs: { bottom: '' } },
                                          [
                                            a(
                                              'a',
                                              {
                                                staticStyle: {
                                                  'text-decoration': 'none',
                                                },
                                                attrs: {
                                                  slot: 'activator',
                                                  href:
                                                    'http://10.110.1.200:3001/s/BJabRIhsm',
                                                  target: '_blank',
                                                },
                                                slot: 'activator',
                                              },
                                              [
                                                a(
                                                  'v-btn',
                                                  {
                                                    attrs: {
                                                      icon: '',
                                                      large: '',
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      'v-icon',
                                                      { attrs: { large: '' } },
                                                      [e._v('import_contacts')]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                            e._v(' '),
                                            a('span', [
                                              e._v('Infostrum 請假系統手冊'),
                                            ]),
                                          ]
                                        ),
                                        e._v(' '),
                                        a(
                                          'v-btn',
                                          {
                                            class: e.valid
                                              ? 'theme'
                                              : 'disabled',
                                            attrs: { disabled: !e.valid },
                                            on: { click: e.login },
                                          },
                                          [e._v(e._s(e.loalocale.self.login))]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var Wt = a('VU/8')(
          Gt,
          Vt,
          !1,
          function (e) {
            a('mJ9o');
          },
          'data-v-28b9a507',
          null
        ).exports,
        qt = a('fZjL'),
        Kt = a.n(qt),
        Jt = {
          name: 'LeaveTypeInfo',
          props: {},
          data: function () {
            return { show: !1 };
          },
          computed: {
            leaveTypeInfos: function () {
              var e = this.loalocale.self.leaveTypes;
              return Kt()(e).map(function (t) {
                var a = e[t],
                  n = J.lookUpLeaveTypeIconNClass(t);
                return p()({}, a, { class: n.class, icon: n.icon });
              });
            },
          },
          methods: {},
        },
        Qt = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'div',
              [
                e._l(e.leaveTypeInfos, function (t) {
                  return a(
                    'v-card',
                    { key: t.name },
                    [
                      a(
                        'v-layout',
                        { attrs: { row: '', wrap: '' } },
                        [
                          a(
                            'v-flex',
                            { attrs: { xs3: '' } },
                            [
                              a(
                                'v-card-title',
                                { attrs: { 'primary-title': '' } },
                                [
                                  a(
                                    'div',
                                    {
                                      class: [
                                        t.class,
                                        'circle-icon',
                                        'float-left',
                                      ],
                                    },
                                    [
                                      a(
                                        'v-icon',
                                        { attrs: { color: 'white' } },
                                        [e._v(e._s(t.icon))]
                                      ),
                                    ],
                                    1
                                  ),
                                  e._v(' '),
                                  a('h3', { staticClass: 'headline' }, [
                                    e._v(e._s(t.name)),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                          e._v(' '),
                          a(
                            'v-flex',
                            { attrs: { xs9: '' } },
                            [
                              'string' == typeof t.granted
                                ? [
                                    'string' == typeof t.detailInfo
                                      ? [
                                          a('v-card-title', [
                                            a(
                                              'span',
                                              { staticClass: 'highlight' },
                                              [e._v(e._s(t.granted))]
                                            ),
                                            e._v(
                                              '\n              |' +
                                                e._s(t.detailInfo) +
                                                '\n            '
                                            ),
                                          ]),
                                        ]
                                      : [
                                          a(
                                            'v-card-title',
                                            { staticClass: 'highlight' },
                                            [e._v(e._s(t.granted))]
                                          ),
                                          e._v(' '),
                                          e._l(t.detailInfo, function (t, n) {
                                            return a(
                                              'v-card-title',
                                              { key: n },
                                              [e._v(e._s(t))]
                                            );
                                          }),
                                        ],
                                  ]
                                : e._l(t.granted, function (n, o) {
                                    return a(
                                      'span',
                                      { key: o },
                                      [
                                        'string' == typeof t.detailInfo[o]
                                          ? [
                                              a('v-card-title', [
                                                a(
                                                  'span',
                                                  { staticClass: 'highlight' },
                                                  [e._v(e._s(n))]
                                                ),
                                                e._v(
                                                  '\n                |' +
                                                    e._s(t.detailInfo[o]) +
                                                    '\n              '
                                                ),
                                              ]),
                                            ]
                                          : [
                                              a(
                                                'v-card-title',
                                                { staticClass: 'highlight' },
                                                [e._v(e._s(n))]
                                              ),
                                              e._v(' '),
                                              e._l(
                                                t.detailInfo[o],
                                                function (t, n) {
                                                  return a(
                                                    'v-card-title',
                                                    { key: n },
                                                    [e._v(e._s(t))]
                                                  );
                                                }
                                              ),
                                            ],
                                      ],
                                      2
                                    );
                                  }),
                            ],
                            2
                          ),
                          e._v(' '),
                          a(
                            'v-flex',
                            { attrs: { xs12: '' } },
                            [
                              a('v-card-actions', [
                                a('span', { staticClass: 'highlight' }, [
                                  e._v(e._s(t.others.paidInfo)),
                                ]),
                              ]),
                              e._v(' '),
                              a('v-card-actions', [
                                a('span', [e._v(e._s(t.others.reference))]),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      e._v(' '),
                      a('v-divider'),
                    ],
                    1
                  );
                }),
                e._v(' '),
                a(
                  'v-card',
                  [
                    a(
                      'v-layout',
                      [
                        a(
                          'v-flex',
                          { attrs: { xs12: '' } },
                          e._l(e.loalocale.self.otherInfos, function (t) {
                            return a(
                              'v-card-title',
                              { key: t, staticClass: 'remarks' },
                              [e._v(e._s(t))]
                            );
                          }),
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              2
            );
          },
          staticRenderFns: [],
        };
      var Xt = a('VU/8')(
          Jt,
          Qt,
          !1,
          function (e) {
            a('L5HX');
          },
          'data-v-40132906',
          null
        ).exports,
        Zt = a('Gu7T'),
        ea = a.n(Zt),
        ta = {
          name: 'LeaveForm',
          props: {
            dates: {
              type: Array,
              default: function () {
                return [];
              },
            },
            leaveType: {
              type: Object,
              default: function () {
                return { class: '', icon: '', title: '', halfHoursEnabled: !1 };
              },
            },
            allowedDates: { type: Function },
          },
          data: function () {
            return {
              dialog: { date: !1, startFrom: !1, endTo: !1 },
              apply: {
                created: null,
                startFrom: null,
                endTo: null,
                dates: [],
                totalHours: 0,
                remarks: '',
                remainings: { days: 0, hours: 0 },
              },
            };
          },
          computed: {
            valid: function () {
              return this.apply.dates.length > 0 && !!this.leaveType.title;
            },
          },
          mounted: function () {
            this.apply.dates = this.dates;
          },
          methods: {
            calculateTotals: function (e, t) {
              if (
                (e.save(this.apply[t]),
                !J.checkIsHalfHourUnit(this.apply.startFrom, this.apply.endTo))
              ) {
                if (!this.apply.endTo.startsWith('00:'))
                  return (
                    (this.apply.totalHours = 0),
                    void (this.apply.endTo = this.apply.startFrom = null)
                  );
                if (
                  ((this.apply.endTo = this.apply.endTo.replace('00:', '24:')),
                  !J.checkIsHalfHourUnit(
                    this.apply.startFrom,
                    this.apply.endTo
                  ))
                )
                  return (
                    (this.apply.totalHours = 0),
                    void (this.apply.endTo = this.apply.startFrom = null)
                  );
              }
              (this.apply.totalHours = J.calculateTotalHours(
                this.apply.startFrom,
                this.apply.endTo
              )),
                -1 === this.apply.totalHours &&
                  ((this.apply.totalHours = 0),
                  (this.apply.endTo = this.apply.startFrom = null));
            },
            checkDates: function (e, t) {
              (this.apply[t] = this.apply[t].slice(0, 5).sort()),
                e.save(this.apply[t]);
            },
            clear: function () {
              (this.apply.startFrom = null),
                (this.apply.endTo = null),
                (this.apply.totalHours = 0);
            },
            submit: function () {
              this.$emit('submit', this.apply),
                (this.apply = {
                  created: null,
                  startFrom: null,
                  endTo: null,
                  dates: [],
                  totalHours: 0,
                  remarks: '',
                  remainings: { days: 0, hours: 0 },
                });
            },
          },
          watch: {
            dates: function () {
              this.apply.dates = this.dates;
            },
          },
        },
        aa = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-layout',
              { attrs: { row: '', wrap: '' } },
              [
                a(
                  'v-flex',
                  { attrs: { xs12: '' } },
                  [
                    a(
                      'v-card',
                      { attrs: { id: 'apply' } },
                      [
                        a(
                          'v-toolbar',
                          { class: e.leaveType.class },
                          [
                            a('h3', [e._v(e._s(e.leaveType.title))]),
                            e._v(' '),
                            a('v-spacer'),
                            e._v(' '),
                            a(
                              'v-icon',
                              {
                                class: e.leaveType.class,
                                attrs: { title: e.leaveType.title },
                              },
                              [e._v(e._s(e.leaveType.icon))]
                            ),
                          ],
                          1
                        ),
                        e._v(' '),
                        a(
                          'v-card-text',
                          [
                            a(
                              'v-layout',
                              { attrs: { row: '', wrap: '' } },
                              [
                                a(
                                  'v-flex',
                                  { attrs: { xs12: '' } },
                                  [
                                    a(
                                      'v-dialog',
                                      {
                                        ref: 'dialog',
                                        attrs: {
                                          disabled: !e.leaveType.title,
                                          'close-on-content-click': !1,
                                          lazy: '',
                                          width: '290px',
                                          persistent: '',
                                        },
                                        model: {
                                          value: e.dialog.date,
                                          callback: function (t) {
                                            e.$set(e.dialog, 'date', t);
                                          },
                                          expression: 'dialog.date',
                                        },
                                      },
                                      [
                                        a('v-combobox', {
                                          attrs: {
                                            slot: 'activator',
                                            multiple: '',
                                            chips: '',
                                            'small-chips': '',
                                            label: e.loalocale.self.leaveDates,
                                            readonly: '',
                                          },
                                          slot: 'activator',
                                          model: {
                                            value: e.apply.dates,
                                            callback: function (t) {
                                              e.$set(e.apply, 'dates', t);
                                            },
                                            expression: 'apply.dates',
                                          },
                                        }),
                                        e._v(' '),
                                        a(
                                          'v-date-picker',
                                          {
                                            attrs: {
                                              'allowed-dates': e.allowedDates,
                                              multiple: '',
                                              'no-title': '',
                                              scrollable: '',
                                            },
                                            model: {
                                              value: e.apply.dates,
                                              callback: function (t) {
                                                e.$set(e.apply, 'dates', t);
                                              },
                                              expression: 'apply.dates',
                                            },
                                          },
                                          [
                                            a('v-spacer'),
                                            e._v(' '),
                                            a(
                                              'v-btn',
                                              {
                                                staticClass: 'theme',
                                                attrs: { flat: '' },
                                                on: {
                                                  click: function (t) {
                                                    return e.checkDates(
                                                      e.$refs.dialog,
                                                      'dates'
                                                    );
                                                  },
                                                },
                                              },
                                              [e._v('OK')]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                e._v(' '),
                                e.leaveType.halfHoursEnabled &&
                                1 === e.apply.dates.length
                                  ? a(
                                      'v-flex',
                                      { attrs: { xs6: '' } },
                                      [
                                        a(
                                          'v-dialog',
                                          {
                                            ref: 'startFromDialog',
                                            attrs: {
                                              'close-on-content-click': !1,
                                              lazy: '',
                                              width: '290px',
                                              persistent: '',
                                            },
                                            model: {
                                              value: e.dialog.startFrom,
                                              callback: function (t) {
                                                e.$set(
                                                  e.dialog,
                                                  'startFrom',
                                                  t
                                                );
                                              },
                                              expression: 'dialog.startFrom',
                                            },
                                          },
                                          [
                                            a('v-text-field', {
                                              attrs: {
                                                slot: 'activator',
                                                label: e.loalocale.self.from,
                                                'prepend-icon': 'access_time',
                                              },
                                              slot: 'activator',
                                              model: {
                                                value: e.apply.startFrom,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.apply,
                                                    'startFrom',
                                                    t
                                                  );
                                                },
                                                expression: 'apply.startFrom',
                                              },
                                            }),
                                            e._v(' '),
                                            a(
                                              'v-time-picker',
                                              {
                                                attrs: { format: '24hr' },
                                                model: {
                                                  value: e.apply.startFrom,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.apply,
                                                      'startFrom',
                                                      t
                                                    );
                                                  },
                                                  expression: 'apply.startFrom',
                                                },
                                              },
                                              [
                                                a('v-spacer'),
                                                e._v(' '),
                                                a(
                                                  'v-btn',
                                                  {
                                                    staticClass: 'theme',
                                                    attrs: { flat: '' },
                                                    on: {
                                                      click: function (t) {
                                                        return e.calculateTotals(
                                                          e.$refs
                                                            .startFromDialog,
                                                          'startFrom'
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [e._v('OK')]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    )
                                  : e._e(),
                                e._v(' '),
                                e.leaveType.halfHoursEnabled &&
                                1 === e.apply.dates.length
                                  ? a(
                                      'v-flex',
                                      { attrs: { xs5: '' } },
                                      [
                                        a(
                                          'v-dialog',
                                          {
                                            ref: 'endToDialog',
                                            attrs: { lazy: '', width: '290px' },
                                            model: {
                                              value: e.dialog.endTo,
                                              callback: function (t) {
                                                e.$set(e.dialog, 'endTo', t);
                                              },
                                              expression: 'dialog.endTo',
                                            },
                                          },
                                          [
                                            a('v-text-field', {
                                              attrs: {
                                                slot: 'activator',
                                                label: e.loalocale.self.to,
                                              },
                                              slot: 'activator',
                                              model: {
                                                value: e.apply.endTo,
                                                callback: function (t) {
                                                  e.$set(e.apply, 'endTo', t);
                                                },
                                                expression: 'apply.endTo',
                                              },
                                            }),
                                            e._v(' '),
                                            a(
                                              'v-time-picker',
                                              {
                                                attrs: { format: '24hr' },
                                                model: {
                                                  value: e.apply.endTo,
                                                  callback: function (t) {
                                                    e.$set(e.apply, 'endTo', t);
                                                  },
                                                  expression: 'apply.endTo',
                                                },
                                              },
                                              [
                                                a('v-spacer'),
                                                e._v(' '),
                                                a(
                                                  'v-btn',
                                                  {
                                                    staticClass: 'theme',
                                                    attrs: { flat: '' },
                                                    on: {
                                                      click: function (t) {
                                                        return e.calculateTotals(
                                                          e.$refs.endToDialog,
                                                          'endTo'
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [e._v('OK')]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    )
                                  : e._e(),
                                e._v(' '),
                                e.leaveType.halfHoursEnabled &&
                                1 === e.apply.dates.length
                                  ? a(
                                      'v-flex',
                                      { attrs: { xs1: '' } },
                                      [
                                        a(
                                          'v-btn',
                                          {
                                            attrs: { icon: '', ripple: '' },
                                            on: { click: e.clear },
                                          },
                                          [
                                            a(
                                              'v-icon',
                                              { attrs: { size: '16' } },
                                              [e._v('clear')]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    )
                                  : e._e(),
                                e._v(' '),
                                e.leaveType.halfHoursEnabled &&
                                1 === e.apply.dates.length
                                  ? a(
                                      'v-flex',
                                      { attrs: { xs6: '' } },
                                      [
                                        a('v-text-field', {
                                          attrs: {
                                            label: e.loalocale.self.totals,
                                            readonly: '',
                                          },
                                          model: {
                                            value: e.apply.totalHours,
                                            callback: function (t) {
                                              e.$set(
                                                e.apply,
                                                'totalHours',
                                                e._n(t)
                                              );
                                            },
                                            expression: 'apply.totalHours',
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : e._e(),
                                e._v(' '),
                                e.leaveType.halfHoursEnabled &&
                                1 === e.apply.dates.length
                                  ? a(
                                      'v-flex',
                                      { attrs: { xs6: '' } },
                                      [
                                        a('v-text-field', {
                                          attrs: {
                                            value: e.loalocale.self.hour,
                                            readonly: '',
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : e._e(),
                                e._v(' '),
                                a(
                                  'v-flex',
                                  { attrs: { xs12: '' } },
                                  [
                                    a('v-text-field', {
                                      attrs: {
                                        disabled: !e.leaveType.title,
                                        label: e.loalocale.self.remarks,
                                      },
                                      model: {
                                        value: e.apply.remarks,
                                        callback: function (t) {
                                          e.$set(e.apply, 'remarks', t);
                                        },
                                        expression: 'apply.remarks',
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                e._v(' '),
                                a(
                                  'v-flex',
                                  { attrs: { xs12: '' } },
                                  [
                                    a(
                                      'v-btn',
                                      {
                                        class: e.valid ? 'theme' : 'disabled',
                                        attrs: { disabled: !e.valid },
                                        on: { click: e.submit },
                                      },
                                      [
                                        a('v-icon', [e._v('move_to_inbox')]),
                                        e._v(
                                          '\n              ' +
                                            e._s(e.loalocale.self.take) +
                                            '\n            '
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var na = a('VU/8')(
          ta,
          aa,
          !1,
          function (e) {
            a('CXsG');
          },
          null,
          null
        ).exports,
        oa = {
          name: 'LeaveContainer',
          props: {
            leaves: {
              type: Array,
              default: function () {
                return [];
              },
            },
            readonly: { type: Boolean, default: !1 },
          },
          data: function () {
            return {};
          },
          methods: {
            getTitle: function (e, t, a, n) {
              return e.length > 1
                ? e.join(', ')
                : t && a
                ? e[0] +
                  ' - ' +
                  t +
                  ' ~ ' +
                  a +
                  ' (' +
                  n +
                  ' ' +
                  this.loalocale.self.hours +
                  ')'
                : e[0];
            },
            getAgent: function (e) {
              return e ? this.loalocale.self.remarks + ': ' + e : '';
            },
            remove: function (e) {
              this.$emit('remove', e);
            },
          },
        },
        sa = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-flex',
              [
                a(
                  'v-list',
                  e._l(e.leaves, function (t) {
                    return a(
                      'v-list-tile',
                      { key: t.index, attrs: { avatar: '' } },
                      [
                        a(
                          'v-list-tile-avatar',
                          [
                            a('v-icon', { class: t.class }, [
                              e._v(e._s(t.icon)),
                            ]),
                          ],
                          1
                        ),
                        e._v(' '),
                        a(
                          'v-list-tile-content',
                          [
                            a('v-list-tile-title', [e._v(e._s(t.title))]),
                            e._v(' '),
                            a(
                              'v-tooltip',
                              { attrs: { bottom: '' } },
                              [
                                a(
                                  'v-list-tile-sub-title',
                                  {
                                    attrs: { slot: 'activator' },
                                    slot: 'activator',
                                  },
                                  [
                                    e._v(
                                      e._s(
                                        e.getTitle(
                                          t.apply.dates,
                                          t.apply.startFrom,
                                          t.apply.endTo,
                                          t.apply.totalHours
                                        )
                                      )
                                    ),
                                  ]
                                ),
                                e._v(
                                  '\n          ' +
                                    e._s(
                                      e.getTitle(
                                        t.apply.dates,
                                        t.apply.startFrom,
                                        t.apply.endTo,
                                        t.apply.totalHours
                                      )
                                    ) +
                                    '\n        '
                                ),
                              ],
                              1
                            ),
                            e._v(' '),
                            t.apply.remarks
                              ? a('v-list-tile-sub-title', [
                                  e._v(e._s(e.getAgent(t.apply.remarks))),
                                ])
                              : e._e(),
                          ],
                          1
                        ),
                        e._v(' '),
                        !e.readonly || t.countdown
                          ? a(
                              'v-list-tile-avatar',
                              [
                                a(
                                  'v-tooltip',
                                  { attrs: { bottom: '' } },
                                  [
                                    a(
                                      'v-chip',
                                      {
                                        staticClass: 'theme',
                                        attrs: {
                                          slot: 'activator',
                                          'text-color': 'white',
                                        },
                                        slot: 'activator',
                                      },
                                      [e._v(e._s(t.apply.remainings.days))]
                                    ),
                                    e._v(' '),
                                    a('span', [
                                      e._v(
                                        e._s(e.loalocale.self.remainings) +
                                          ' ' +
                                          e._s(t.apply.remainings.days) +
                                          ' ' +
                                          e._s(e.loalocale.self.days)
                                      ),
                                    ]),
                                    e._v(' '),
                                    t.halfHoursEnabled
                                      ? a('span', [
                                          e._v(
                                            e._s(t.apply.remainings.hours) +
                                              ' ' +
                                              e._s(e.loalocale.self.hours)
                                          ),
                                        ])
                                      : e._e(),
                                    e._v(' '),
                                    a('br'),
                                    e._v(' '),
                                    a('span', [
                                      e._v(
                                        e._s(e.loalocale.self.deadline) +
                                          ' ' +
                                          e._s(t.deadline)
                                      ),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          : e._e(),
                        e._v(' '),
                        a(
                          'v-list-tile-avatar',
                          [
                            a(
                              'v-btn',
                              {
                                attrs: { icon: '', ripple: '' },
                                on: {
                                  click: function (a) {
                                    return e.remove(t);
                                  },
                                },
                              },
                              [
                                a('v-icon', { attrs: { size: '16' } }, [
                                  e._v('clear'),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    );
                  }),
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var ra = {
          name: 'LeaveTakingBlock',
          components: {
            'leave-type-container': Dt,
            'leave-form': na,
            'leave-container': a('VU/8')(
              oa,
              sa,
              !1,
              function (e) {
                a('GlHt');
              },
              null,
              null
            ).exports,
          },
          props: {
            date: { type: String },
            fullControl: { type: Boolean, default: !1 },
            isEditMode: { type: Boolean, default: !0 },
            leaveTypes: {
              type: Array,
              default: function () {
                return [];
              },
            },
            employeeId: { type: String, default: '' },
          },
          data: function () {
            return {
              systemNotification: { level: 'warning', text: '', visible: !1 },
              selectedLT: {
                class: '',
                icon: '',
                title: '',
                halfHoursEnabled: !1,
              },
              formattedLeaveTypes: [],
              records: [],
            };
          },
          computed: {
            availableLTs: function () {
              var e = this;
              return this.formattedLeaveTypes.filter(function (t) {
                return !e.isEditMode || (!e.isLTAvailable(t) && !t.stashed);
              });
            },
            unavailableLTs: function () {
              var e = this;
              return this.formattedLeaveTypes.filter(function (t) {
                return e.isLTAvailable(t);
              });
            },
          },
          mounted: function () {
            this.formattedLeaveTypes = this.accumulateLTsCosumes(
              this.formatLTs(this.leaveTypes)
            );
          },
          methods: {
            isLTAvailable: function (e) {
              return (
                e.name.startsWith(K.compensatory.keyword) &&
                e.consumes.days === e.totals.days &&
                e.consumes.halfHours === e.totals.halfHours &&
                J.formatDate(e.deadline) <= J.formatDate('now')
              );
            },
            updateLOA: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s, r;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (a = e.records.map(function (e) {
                                return {
                                  appliedDate: new Date(),
                                  startFrom: e.apply.startFrom,
                                  endTo: e.apply.endTo,
                                  leaveType: e.name,
                                  dates: e.apply.dates.map(function (e) {
                                    return new Date(e);
                                  }),
                                  remarks: e.apply.remarks,
                                  signings: [],
                                  totals: {
                                    days:
                                      0 === e.apply.totalHours
                                        ? e.apply.dates.length
                                        : 0,
                                    halfHours: 2 * e.apply.totalHours,
                                  },
                                };
                              })),
                              (t.next = 3),
                              Ce({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                id: e.employeeId,
                                records: a,
                                activatedLeaveTypes: e
                                  .undoAccumulateLTsCosumes(
                                    e.formattedLeaveTypes,
                                    a
                                  )
                                  .map(function (e) {
                                    return ve()({}, e, {
                                      consumes: {
                                        days: e.consumes.days,
                                        halfHours: 2 * e.consumes.hours,
                                      },
                                    });
                                  }),
                              })
                            );
                          case 3:
                            (n = t.sent),
                              (o = n.data),
                              (s = o.success),
                              (r = o.message),
                              e.reset(),
                              e.$emit('taken', s, r);
                          case 9:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            accumulateLTsCosumes: function (e) {
              var t = e.find(function (e) {
                return 'familyCare' === e.name;
              });
              t &&
                (e.find(function (e) {
                  return 'personal' === e.name;
                }).consumes.days += t.consumes.days);
              return e;
            },
            undoAccumulateLTsCosumes: function (e, t) {
              var a = e.find(function (e) {
                return 'familyCare' === e.name;
              });
              if (a) {
                var n = e.find(function (e) {
                  return 'personal' === e.name;
                });
                n.consumes.days -= a.consumes.days;
                var o = t.find(function (e) {
                  return 'familyCare' === e.leaveType;
                });
                o &&
                  o.dates &&
                  o.dates.length > 0 &&
                  (n.consumes.days += o.dates.length);
              }
              return e;
            },
            formatLTs: function (e) {
              var t = this,
                a = JSON.parse(it()(K.leaveTypes));
              return (
                e.forEach(function (e) {
                  var t = a.find(function (t) {
                    return t.name === e.name;
                  });
                  if (t)
                    (t.enabled = e.enabled),
                      (t.consumes = {
                        days: e.consumes.days,
                        hours: e.consumes.halfHours
                          ? e.consumes.halfHours / 2
                          : 0,
                      }),
                      (t.totals = {
                        days: e.totals.days,
                        hours: e.totals.halfHours ? e.totals.halfHours / 2 : 0,
                      }),
                      (t.deadline = J.formatDate(e.deadline));
                  else {
                    var n = K.customLeaveType;
                    a.push(
                      ve()({}, n, {
                        index: a.length,
                        stashed: e.stashed,
                        enabled: !0,
                        title: e.name,
                        name: e.name,
                        consumes: {
                          days: e.consumes.days,
                          hours: e.consumes.halfHours
                            ? e.consumes.halfHours / 2
                            : 0,
                        },
                        totals: {
                          days: e.totals.days,
                          hours: e.totals.halfHours
                            ? e.totals.halfHours / 2
                            : 0,
                        },
                        deadline: J.formatDate(e.deadline),
                      })
                    );
                  }
                }),
                a.filter(function (e) {
                  return t.fullControl || e.enabled;
                })
              );
            },
            pick1LT: function (e) {
              this.$emit('picked', e), (this.selectedLT = e);
            },
            remove1L: function (e) {
              var t = this.records.find(function (t) {
                  return t.index === e.index;
                }),
                a = this.formattedLeaveTypes.find(function (e) {
                  return e.name === t.name;
                });
              if (0 === t.apply.totalHours)
                a.consumes.days -= t.apply.dates.length;
              else {
                var n = 8 * a.consumes.days + a.consumes.hours;
                (n -= t.apply.totalHours),
                  (a.consumes.days = Math.floor(n / 8)),
                  (a.consumes.hours = n % 8);
              }
              this.records = this.records.filter(function (t) {
                return t.index !== e.index;
              });
            },
            take1L: function (e) {
              if (1 === e.dates.length)
                if (this.selectedLT.totals.days > 0) {
                  if (
                    this.selectedLT.totals.days -
                      this.selectedLT.consumes.days ==
                      1 &&
                    e.totalHours >= 8
                  )
                    return (
                      (this.systemNotification.text =
                        this.loalocale.self.runOutQotaOfLeave +
                        '(當可申請天數剩下 1 天時, 申請時數 > 9小時)'),
                      (this.systemNotification.visible = !0),
                      void this.$emit('notified', this.systemNotification)
                    );
                } else if (
                  this.selectedLT.consumes.hours + e.totalHours >
                  this.selectedLT.totals.hours
                )
                  return (
                    (this.systemNotification.text =
                      this.loalocale.self.runOutQotaOfLeave +
                      '(已使用時數 + 申請時數 > 總時數)'),
                    (this.systemNotification.visible = !0),
                    void this.$emit('notified', this.systemNotification)
                  );
              if (e.startFrom && e.endTo);
              else if (
                this.selectedLT.consumes.days + e.dates.length >
                this.selectedLT.totals.days
              )
                return (
                  (this.systemNotification.text =
                    this.loalocale.self.runOutQotaOfLeave +
                    '(已使用天數 + 申請天數 > 總天數)'),
                  (this.systemNotification.visible = !0),
                  void this.$emit('notified', this.systemNotification)
                );
              var t = this.formattedLeaveTypes.find(function (e) {
                  return 'personal' === e.name;
                }),
                a = this.formattedLeaveTypes.find(function (e) {
                  return 'familyCare' === e.name;
                });
              if (
                t &&
                a &&
                ['personal', 'familyCare'].includes(this.selectedLT.name) &&
                8 * t.consumes.days +
                  t.consumes.hours +
                  (1 === e.dates.length && e.totalHours > 0
                    ? e.totalHours
                    : 8 * e.dates.length) >
                  8 * t.totals.days
              )
                return (
                  (this.systemNotification.text =
                    this.loalocale.self.runOutQotaOfLeave + 'D'),
                  (this.systemNotification.visible = !0),
                  void this.$emit('notified', this.systemNotification)
                );
              if (this.selectedLT.halfHoursEnabled) {
                (this.selectedLT.consumes.days +=
                  1 === e.dates.length && 0 === e.totalHours
                    ? e.dates.length
                    : 0),
                  (this.selectedLT.consumes.hours += e.totalHours),
                  this.selectedLT.consumes.hours >= 8 &&
                    (this.selectedLT.consumes.days++,
                    (this.selectedLT.consumes.hours -= 8));
                var n =
                  8 * this.selectedLT.totals.days +
                  this.selectedLT.totals.hours -
                  8 * this.selectedLT.consumes.days -
                  this.selectedLT.consumes.hours;
                (e.remainings.days = Math.floor(n / 8)),
                  (e.remainings.hours = n % 8);
              } else
                (this.selectedLT.consumes.days += e.dates.length),
                  (e.remainings.days =
                    this.selectedLT.totals.days -
                    this.selectedLT.consumes.days);
              this.records.push(
                ve()(
                  { apply: ve()({}, e), index: this.records.length },
                  this.selectedLT
                )
              );
            },
            allowedDates: function (e) {
              var t = new Date(e),
                a = this.formattedLeaveTypes.find(function (e) {
                  return 'annualPreRequest' === e.name;
                }),
                n = this.formattedLeaveTypes.find(function (e) {
                  return 'annual' === e.name;
                });
              return (
                !n ||
                !a ||
                this.selectedLT.name !== a.name ||
                new Date(n.deadline) < t
              );
            },
            cancel: function () {
              this.reset(), this.$emit('cancel');
            },
            reset: function () {
              (this.selectedLT = {
                class: '',
                icon: '',
                title: '',
                halfHoursEnabled: !1,
              }),
                (this.records = []);
            },
          },
          watch: {
            leaveTypes: function () {
              this.formattedLeaveTypes = this.accumulateLTsCosumes(
                this.formatLTs(this.leaveTypes)
              );
            },
          },
        },
        la = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-app',
              { attrs: { id: 'detail' } },
              [
                a(
                  'v-container',
                  { attrs: { fluid: '', 'fill-height': '' } },
                  [
                    a(
                      'v-layout',
                      { attrs: { 'align-center': '', 'justify-center': '' } },
                      [
                        a(
                          'v-flex',
                          [
                            a(
                              'v-form',
                              { ref: 'form', attrs: { 'lazy-validation': '' } },
                              [
                                a('leave-type-container', {
                                  attrs: {
                                    leaveTypes: e.availableLTs,
                                    readonly: !e.fullControl,
                                    helper: '',
                                  },
                                  on: { pickOne: e.pick1LT },
                                }),
                                e._v(' '),
                                a('leave-form', {
                                  attrs: {
                                    dates: e.date ? [e.date] : [],
                                    'leave-type': e.selectedLT,
                                    'allowed-dates': e.allowedDates,
                                  },
                                  on: { submit: e.take1L },
                                }),
                                e._v(' '),
                                a('leave-container', {
                                  attrs: {
                                    leaves: e.records,
                                    readonly: !e.fullControl,
                                  },
                                  on: { remove: e.remove1L },
                                }),
                                e._v(' '),
                                a(
                                  'v-layout',
                                  { attrs: { row: '', wrap: '' } },
                                  [
                                    a(
                                      'v-flex',
                                      { attrs: { xs12: '' } },
                                      [
                                        e.isEditMode
                                          ? a(
                                              'v-btn',
                                              {
                                                class:
                                                  0 == e.records.length
                                                    ? ['float-right']
                                                    : ['theme', 'float-right'],
                                                attrs: {
                                                  disabled:
                                                    0 == e.records.length,
                                                },
                                                on: { click: e.updateLOA },
                                              },
                                              [
                                                e._v(
                                                  e._s(e.loalocale.self.save)
                                                ),
                                              ]
                                            )
                                          : e._e(),
                                        e._v(' '),
                                        a(
                                          'v-btn',
                                          { on: { click: e.cancel } },
                                          [e._v(e._s(e.loalocale.self.cancel))]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var ia = a('VU/8')(
          ra,
          la,
          !1,
          function (e) {
            a('Rvhh');
          },
          'data-v-2ef9874a',
          null
        ).exports,
        ca = {
          name: 'LeaveInfo',
          props: {
            on: {
              type: Object,
              default: function () {
                return {};
              },
            },
            employee: {
              type: Object,
              default: function () {
                return {};
              },
            },
            record: {
              type: Object,
              default: function () {
                return {};
              },
            },
            color: { type: String, default: '' },
            textColor: { type: String, default: '' },
            icon: { type: Boolean, default: !0 },
          },
          data: function () {
            return { whiteTextColor: 'white' };
          },
          computed: {
            pass: function () {
              return this.record.pass;
            },
            allDay: function () {
              return this.record.totals.days > 0;
            },
            taker: function () {
              return this.employee.username;
            },
            lt: function () {
              return J.lookUpLeaveType(this.record.leaveType);
            },
          },
          methods: {},
        },
        ua = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-chip',
              e._g(
                {
                  class: { flash: !e.pass },
                  attrs: {
                    label: e.allDay,
                    color: e.color ? e.color : e.lt.color,
                    'text-color': e.pass
                      ? e.textColor
                        ? e.textColor
                        : e.whiteTextColor
                      : e.color
                      ? e.color
                      : e.lt.color,
                    outline: !e.pass,
                  },
                },
                e.on
              ),
              [
                e.icon
                  ? a(
                      'v-avatar',
                      { attrs: { tile: e.allDay, color: e.lt.color } },
                      [
                        a('v-icon', { attrs: { color: e.whiteTextColor } }, [
                          e._v(e._s(e.lt.icon)),
                        ]),
                      ],
                      1
                    )
                  : e._e(),
                e._v('\n  ' + e._s(e.taker) + '\n'),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var da = a('VU/8')(
          ca,
          ua,
          !1,
          function (e) {
            a('1Gwh');
          },
          'data-v-56b47a9d',
          null
        ).exports,
        pa = {
          name: 'LeaveDetailInfo',
          components: { 'signing-block': ae },
          props: {
            employee: {
              type: Object,
              default: function () {
                return {};
              },
            },
            record: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          data: function () {
            return {};
          },
          computed: {
            title: function () {
              return (
                this.employee.name +
                '(' +
                this.employee.username +
                ') ' +
                Je.generateSummary({
                  leaveType: this.record.leaveType,
                  days: this.record.totals.days,
                  hours: this.record.totals.halfHours / 2,
                })
              );
            },
            taken: function () {
              return this.record.dates
                .map(function (e) {
                  return J.formatDate(e);
                })
                .join(', ');
            },
            applied: function () {
              return J.formatDate(this.record.appliedDate);
            },
            remarks: function () {
              return this.record.remarks;
            },
            timeRange: function () {
              return this.record.startFrom + '-' + this.record.endTo;
            },
            signable: function () {
              return this.record.signers.length > 0;
            },
            allDay: function () {
              return this.record.totals.days > 0;
            },
          },
          methods: {
            sign: function (e, t, a) {
              var n = this;
              return v()(
                u.a.mark(function o() {
                  var s, r, l, i;
                  return u.a.wrap(
                    function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2),
                              Le({
                                loginuser: n.loginuser.username,
                                token: n.loginuser.token,
                                id: e,
                                recordID: t,
                                pass: a,
                              })
                            );
                          case 2:
                            (s = o.sent),
                              (r = s.data),
                              (l = r.success),
                              (i = r.message),
                              n.$emit('signed', l, i);
                          case 7:
                          case 'end':
                            return o.stop();
                        }
                    },
                    o,
                    n
                  );
                })
              )();
            },
          },
        },
        fa = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-card',
              { attrs: { flat: '' } },
              [
                a(
                  'v-tooltip',
                  { attrs: { bottom: '' } },
                  [
                    a(
                      'v-toolbar',
                      {
                        staticClass: 'theme',
                        attrs: { slot: 'activator' },
                        slot: 'activator',
                      },
                      [
                        a('v-toolbar-title', [e._v(e._s(e.title))]),
                        e._v(' '),
                        a('v-spacer'),
                        e._v(' '),
                        a(
                          'v-btn',
                          {
                            attrs: { icon: '' },
                            on: {
                              click: function (t) {
                                return t.stopPropagation(), e.$emit('close');
                              },
                            },
                          },
                          [
                            a('v-icon', { attrs: { color: 'white' } }, [
                              e._v('clear'),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v('\n    ' + e._s(e.title) + '\n  '),
                  ],
                  1
                ),
                e._v(' '),
                a('v-card-title', [
                  a('div', [
                    a('div', [
                      e._v(
                        e._s(e.loalocale.self.applied) + ' ' + e._s(e.applied)
                      ),
                    ]),
                    e._v(' '),
                    a('div', [
                      e._v(
                        '\n        ' +
                          e._s(e.loalocale.self.taken) +
                          ' ' +
                          e._s(e.taken) +
                          '\n        '
                      ),
                      e.allDay ? e._e() : a('span', [e._v(e._s(e.timeRange))]),
                    ]),
                    e._v(' '),
                    a('div', [
                      e._v(
                        e._s(e.loalocale.self.remarks) +
                          ' ' +
                          e._s(
                            e.remarks
                              ? e.remarks
                              : e.loalocale.self.defaultAgent
                          )
                      ),
                    ]),
                  ]),
                ]),
                e._v(' '),
                e.signable
                  ? a(
                      'v-card-actions',
                      [
                        a('signing-block', {
                          attrs: {
                            employee: e.employee,
                            record: e.record,
                            small: '',
                          },
                          on: { sign: e.sign },
                        }),
                      ],
                      1
                    )
                  : e._e(),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var va = a('VU/8')(
          pa,
          fa,
          !1,
          function (e) {
            a('j3mY');
          },
          null,
          null
        ).exports,
        ma = {
          name: 'Tour',
          props: {
            steps: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return {
              options: {
                useKeyboardNavigation: !1,
                labels: {
                  buttonSkip: '',
                  buttonPrevious: '',
                  buttonNext: '',
                  buttonStop: '',
                },
              },
            };
          },
          mounted: function () {
            this.options.labels = {
              buttonSkip: this.loalocale.self.skip,
              buttonPrevious: this.loalocale.self.previous,
              buttonNext: this.loalocale.self.next,
              buttonStop: this.loalocale.self.finish,
            };
          },
          methods: {
            tour: function () {
              this.$tours.tour.start();
            },
          },
        },
        ha = {
          render: function () {
            var e = this.$createElement,
              t = this._self._c || e;
            return t(
              'div',
              [
                t(
                  'v-btn',
                  {
                    attrs: { bottom: '', right: '', icon: '' },
                    on: { click: this.tour },
                  },
                  [
                    t('v-icon', { attrs: { color: 'blue-grey' } }, [
                      this._v('info'),
                    ]),
                  ],
                  1
                ),
                this._v(' '),
                t('v-tour', {
                  attrs: {
                    name: 'tour',
                    steps: this.steps,
                    options: this.options,
                  },
                }),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var ya = function (e) {
        for (
          var t,
            a = [],
            n = [
              '#F44336',
              '#FFEBEE',
              '#FFCDD2',
              '#EF9A9A',
              '#E57373',
              '#EF5350',
              '#E53935',
              '#D32F2F',
              '#C62828',
              '#B71C1C',
              '#FF8A80',
              '#FF5252',
              '#FF1744',
              '#D50000',
              '#E91E63',
              '#FCE4EC',
              '#F8BBD0',
              '#F48FB1',
              '#F06292',
              '#EC407A',
              '#D81B60',
              '#C2185B',
              '#AD1457',
              '#880E4F',
              '#FF80AB',
              '#FF4081',
              '#F50057',
              '#C51162',
              '#9C27B0',
              '#F3E5F5',
              '#E1BEE7',
              '#CE93D8',
              '#BA68C8',
              '#AB47BC',
              '#8E24AA',
              '#7B1FA2',
              '#6A1B9A',
              '#4A148C',
              '#EA80FC',
              '#E040FB',
              '#D500F9',
              '#AA00FF',
              '#673AB7',
              '#EDE7F6',
              '#D1C4E9',
              '#B39DDB',
              '#9575CD',
              '#7E57C2',
              '#5E35B1',
              '#512DA8',
              '#4527A0',
              '#311B92',
              '#B388FF',
              '#7C4DFF',
              '#651FFF',
              '#6200EA',
              '#3F51B5',
              '#E8EAF6',
              '#C5CAE9',
              '#9FA8DA',
              '#7986CB',
              '#5C6BC0',
              '#3949AB',
              '#303F9F',
              '#283593',
              '#1A237E',
              '#8C9EFF',
              '#536DFE',
              '#3D5AFE',
              '#304FFE',
              '#2196F3',
              '#E3F2FD',
              '#BBDEFB',
              '#90CAF9',
              '#64B5F6',
              '#42A5F5',
              '#1E88E5',
              '#1976D2',
              '#1565C0',
              '#0D47A1',
              '#82B1FF',
              '#448AFF',
              '#2979FF',
              '#2962FF',
              '#03A9F4',
              '#E1F5FE',
              '#B3E5FC',
              '#81D4FA',
              '#4FC3F7',
              '#29B6F6',
              '#039BE5',
              '#0288D1',
              '#0277BD',
              '#01579B',
              '#80D8FF',
              '#40C4FF',
              '#00B0FF',
              '#0091EA',
              '#00BCD4',
              '#E0F7FA',
              '#B2EBF2',
              '#80DEEA',
              '#4DD0E1',
              '#26C6DA',
              '#00ACC1',
              '#0097A7',
              '#00838F',
              '#006064',
              '#84FFFF',
              '#18FFFF',
              '#00E5FF',
              '#00B8D4',
              '#009688',
              '#E0F2F1',
              '#B2DFDB',
              '#80CBC4',
              '#4DB6AC',
              '#26A69A',
              '#00897B',
              '#00796B',
              '#00695C',
              '#004D40',
              '#A7FFEB',
              '#64FFDA',
              '#1DE9B6',
              '#00BFA5',
              '#4CAF50',
              '#E8F5E9',
              '#C8E6C9',
              '#A5D6A7',
              '#81C784',
              '#66BB6A',
              '#43A047',
              '#388E3C',
              '#2E7D32',
              '#1B5E20',
              '#B9F6CA',
              '#69F0AE',
              '#00E676',
              '#00C853',
              '#8BC34A',
              '#F1F8E9',
              '#DCEDC8',
              '#C5E1A5',
              '#AED581',
              '#9CCC65',
              '#7CB342',
              '#689F38',
              '#558B2F',
              '#33691E',
              '#CCFF90',
              '#B2FF59',
              '#76FF03',
              '#64DD17',
              '#CDDC39',
              '#F9FBE7',
              '#F0F4C3',
              '#E6EE9C',
              '#DCE775',
              '#D4E157',
              '#C0CA33',
              '#AFB42B',
              '#9E9D24',
              '#827717',
              '#F4FF81',
              '#EEFF41',
              '#C6FF00',
              '#AEEA00',
              '#FFEB3B',
              '#FFFDE7',
              '#FFF9C4',
              '#FFF59D',
              '#FFF176',
              '#FFEE58',
              '#FDD835',
              '#FBC02D',
              '#F9A825',
              '#F57F17',
              '#FFFF8D',
              '#FFFF00',
              '#FFEA00',
              '#FFD600',
              '#FFC107',
              '#FFF8E1',
              '#FFECB3',
              '#FFE082',
              '#FFD54F',
              '#FFCA28',
              '#FFB300',
              '#FFA000',
              '#FF8F00',
              '#FF6F00',
              '#FFE57F',
              '#FFD740',
              '#FFC400',
              '#FFAB00',
              '#FF9800',
              '#FFF3E0',
              '#FFE0B2',
              '#FFCC80',
              '#FFB74D',
              '#FFA726',
              '#FB8C00',
              '#F57C00',
              '#EF6C00',
              '#E65100',
              '#FFD180',
              '#FFAB40',
              '#FF9100',
              '#FF6D00',
              '#FF5722',
              '#FBE9E7',
              '#FFCCBC',
              '#FFAB91',
              '#FF8A65',
              '#FF7043',
              '#F4511E',
              '#E64A19',
              '#D84315',
              '#BF360C',
              '#FF9E80',
              '#FF6E40',
              '#FF3D00',
              '#DD2C00',
              '#795548',
              '#EFEBE9',
              '#D7CCC8',
              '#BCAAA4',
              '#A1887F',
              '#8D6E63',
              '#6D4C41',
              '#5D4037',
              '#4E342E',
              '#3E2723',
              '#607D8B',
              '#ECEFF1',
              '#CFD8DC',
              '#B0BEC5',
              '#90A4AE',
              '#78909C',
              '#546E7A',
              '#455A64',
              '#37474F',
              '#263238',
              '#9E9E9E',
              '#FAFAFA',
              '#F5F5F5',
              '#EEEEEE',
              '#E0E0E0',
              '#BDBDBD',
              '#757575',
              '#616161',
              '#424242',
              '#212121',
            ];
          e > a.length;

        ) {
          var o =
            n[((t = n.length), Math.floor(Math.random() * Math.floor(t)))];
          a.includes(o) || a.push(o);
        }
        return a.map(function (e) {
          return {
            color: e,
            textColor: (function (e) {
              return ![
                '#F44336',
                '#E53935',
                '#D32F2F',
                '#C62828',
                '#B71C1C',
                '#E91E63',
                '#D81B60',
                '#C2185B',
                '#AD1457',
                '#880E4F',
                '#9C27B0',
                '#8E24AA',
                '#7B1FA2',
                '#6A1B9A',
                '#4A148C',
                '#673AB7',
                '#5E35B1',
                '#512DA8',
                '#4527A0',
                '#311B92',
                '#3F51B5',
                '#3949AB',
                '#303F9F',
                '#283593',
                '#1A237E',
                '#2196F3',
                '#1E88E5',
                '#1976D2',
                '#1565C0',
                '#0D47A1',
                '#03A9F4',
                '#039BE5',
                '#0288D1',
                '#0277BD',
                '#01579B',
                '#00BCD4',
                '#00ACC1',
                '#0097A7',
                '#00838F',
                '#006064',
                '#009688',
                '#00897B',
                '#00796B',
                '#00695C',
                '#004D40',
                '#4CAF50',
                '#43A047',
                '#388E3C',
                '#2E7D32',
                '#1B5E20',
                '#8BC34A',
                '#7CB342',
                '#689F38',
                '#558B2F',
                '#33691E',
                '#CDDC39',
                '#C0CA33',
                '#AFB42B',
                '#9E9D24',
                '#827717',
                '#FFEB3B',
                '#FDD835',
                '#FBC02D',
                '#F9A825',
                '#F57F17',
                '#FFC107',
                '#FFB300',
                '#FFA000',
                '#FF8F00',
                '#FF6F00',
                '#FF9800',
                '#FB8C00',
                '#F57C00',
                '#EF6C00',
                '#E65100',
                '#FF5722',
                '#F4511E',
                '#E64A19',
                '#D84315',
                '#BF360C',
                '#795548',
                '#6D4C41',
                '#5D4037',
                '#4E342E',
                '#3E2723',
                '#607D8B',
                '#546E7A',
                '#455A64',
                '#37474F',
                '#263238',
                '#9E9E9E',
                '#757575',
                '#616161',
                '#424242',
                '#212121',
                '#000000',
              ].includes(e);
            })(e)
              ? 'black'
              : 'white',
          };
        });
      };
      var ga = {
          name: 'LeaveCalendar',
          components: {
            'page-container': nt,
            'employee-info': pe,
            'leave-taking-block': ia,
            'system-notification': se,
            'calendar-controller': It,
            'leave-info': da,
            'leave-detail-info': va,
            tour: a('VU/8')(
              ma,
              ha,
              !1,
              function (e) {
                a('1B1x'), a('z7RK');
              },
              'data-v-16a47b20',
              null
            ).exports,
          },
          data: function () {
            return {
              calendarDate: '2021-02-01',
              leaves: [],
              year: '',
              month: '',
              dialog: !1,
              showOnlyYours: !1,
              showOnlyUsername: !1,
              notASigner: !1,
              report: [],
              leaveTypes: [],
              leaveTypes_raw: [],
              systemNotification: {
                level: 'warning',
                text: '',
                visible: !1,
                handler: function () {},
              },
              selectedDate: '',
              loading: !1,
              steps: [],
              deptOptions: [],
              selectedDept: '',
              holidays: [],
            };
          },
          computed: {
            leaveGroups: function () {
              var e = {};
              return (
                this.leaves.forEach(function (t) {
                  return (e[t.date] = e[t.date] || []).push(t);
                }),
                e
              );
            },
          },
          mounted: function () {
            var e = this;
            return v()(
              u.a.mark(function t() {
                return u.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          e.getRecords(),
                            e.getHoliday(),
                            e.getLeaveTypes(),
                            (e.deptOptions = [
                              { text: e.loalocale.self.allDept, value: '' },
                            ].concat(
                              ea()(
                                K.deptOptions.map(function (e) {
                                  return { text: e, value: e };
                                })
                              )
                            )),
                            (e.selectedDept = e.loginuser.dept
                              ? e.loginuser.dept
                              : '');
                        case 5:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  e
                );
              })
            )();
          },
          methods: {
            getLeaveTypes: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Ie({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                id: e.loginuser._id,
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data.activatedLeaveTypes),
                              (e.leaveTypes = n),
                              (e.leaveTypes_raw = JSON.parse(it()(n)));
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            getRecords: function () {
              var e = this,
                t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              return v()(
                u.a.mark(function a() {
                  var n, o, s, r, l, i;
                  return u.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              ((n = e.calendarDate.substr(0, 4)),
                              (o = e.calendarDate.substr(5, 2)),
                              t || n !== e.year || o !== e.month)
                            ) {
                              a.next = 6;
                              break;
                            }
                            return a.abrupt('return');
                          case 6:
                            (e.year = n), (e.month = o);
                          case 8:
                            return (
                              (e.loading = !0),
                              (a.next = 11),
                              xe({
                                year: e.year,
                                month: e.month,
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                sdehsra: K.deptsThatSameDeptEmployeeHavingSameReadAccess.includes(
                                  e.loginuser.dept
                                ),
                              })
                            );
                          case 11:
                            (s = a.sent),
                              (r = s.data),
                              (l = r.report),
                              (i = r.fullControl),
                              (e.loading = !1),
                              (e.report = l),
                              (e.leaves = e.toLeaves(e.report)),
                              (e.fullControl = i),
                              (e.steps = [
                                {
                                  target: '.controller  ',
                                  content:
                                    e.loalocale.self
                                      .descriptionOfCalendarController,
                                },
                                {
                                  target: '.calendar',
                                  content:
                                    e.loalocale.self.descriptionOfCalendar1,
                                },
                                {
                                  target: '.calendar',
                                  content:
                                    e.loalocale.self.descriptionOfCalendar2,
                                },
                              ]),
                              e.notASigner ||
                                (e.steps = [
                                  {
                                    target: '.switch-1 .v-input__control',
                                    content:
                                      e.loalocale.self
                                        .descriptionOfShowOnlyYours,
                                  },
                                  {
                                    target: '.switch-2 .v-input__control',
                                    content:
                                      e.loalocale.self
                                        .descriptionOfShowOnlyUsername,
                                  },
                                ].concat(ea()(e.steps)));
                          case 21:
                          case 'end':
                            return a.stop();
                        }
                    },
                    a,
                    e
                  );
                })
              )();
            },
            toLeaves: function (e) {
              var t = this,
                a = [];
              this.showOnlyUsername && (a = ya(e.length));
              var n = [];
              return (
                e
                  .filter(function (e) {
                    return (
                      !t.showOnlyYours || e.username === t.loginuser.username
                    );
                  })
                  .filter(function (e) {
                    return !t.selectedDept || e.dept === t.selectedDept;
                  })
                  .forEach(function (e, t) {
                    e.records.forEach(function (o) {
                      o.dates.forEach(function (s) {
                        n.push({
                          color: a.length > 0 ? a[t].color : '',
                          textColor: a.length > 0 ? a[t].textColor : '',
                          date: J.formatDate(s),
                          employee: e,
                          record: o,
                          open: !1,
                        });
                      });
                    });
                  }),
                n
              );
            },
            selectDate: function (e) {
              (this.dialog = !0), (this.selectedDate = e.date);
            },
            leavePicked: function (e) {
              'annualPreRequest' === e.name && (this.selectedDate = '');
            },
            leaveSigned: function (e, t) {
              e
                ? this.getRecords(!0)
                : ((this.systemNotification.text = J.lookUpCustomMessage(t)),
                  (this.systemNotification.visible = !0));
            },
            leaveTaken: function (e, t) {
              e
                ? ((this.dialog = !1), this.getRecords(!0))
                : ((this.systemNotification.text = J.lookUpCustomMessage(t)),
                  (this.systemNotification.visible = !0));
            },
            getHoliday: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              He({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                year: e.year,
                                month: e.month,
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data.holidays),
                              (e.holidays = n);
                          case 5:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            getHolidayTitle: function (e) {
              if (this.holidays.length > 0) {
                var t = new Date(e),
                  a = this.holidays.find(function (e) {
                    return new Date(e.date).toDateString() === t.toDateString();
                  });
                return a ? a.title : '';
              }
              return '';
            },
            canceled: function () {
              (this.leaveTypes = this.leaveTypes_raw), (this.dialog = !1);
            },
            formatDate: J.formatDate,
          },
          watch: {
            calendarDate: function () {
              this.getRecords(), this.getHoliday();
            },
            showOnlyYours: function () {
              (this.leaves = this.toLeaves(this.report)),
                (this.showOnlyUsername = !1),
                (this.selectedDept = this.loginuser.dept);
            },
            showOnlyUsername: function () {
              this.leaves = this.toLeaves(this.report);
            },
            selectedDept: function () {
              this.leaves = this.toLeaves(this.report);
            },
          },
        },
        _a = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'page-container',
              {
                attrs: { title: e.loalocale.self.title, icon: 'event_note' },
                on: {
                  notified: function (t) {
                    return (e.systemNotification = t);
                  },
                },
              },
              [
                a(
                  'v-card',
                  { staticClass: 'elevation-12' },
                  [
                    a(
                      'calendar-controller',
                      {
                        attrs: { calendarDate: new Date(e.calendarDate) },
                        on: {
                          prev: function (t) {
                            return e.$refs.calendar.prev();
                          },
                          next: function (t) {
                            return e.$refs.calendar.next();
                          },
                          tolastest: function (t) {
                            return (e.calendarDate = e.formatDate(t));
                          },
                        },
                      },
                      [
                        a('tour', { attrs: { steps: e.steps } }),
                        e._v(' '),
                        e.notASigner
                          ? e._e()
                          : a('v-switch', {
                              staticClass: 'switch-1',
                              attrs: { label: e.loalocale.self.showOnlyYours },
                              model: {
                                value: e.showOnlyYours,
                                callback: function (t) {
                                  e.showOnlyYours = t;
                                },
                                expression: 'showOnlyYours',
                              },
                            }),
                        e._v(' '),
                        e.notASigner
                          ? e._e()
                          : a('v-switch', {
                              staticClass: 'switch-2',
                              attrs: {
                                disabled: e.showOnlyYours,
                                label: e.loalocale.self.showOnlyUsername,
                              },
                              model: {
                                value: e.showOnlyUsername,
                                callback: function (t) {
                                  e.showOnlyUsername = t;
                                },
                                expression: 'showOnlyUsername',
                              },
                            }),
                        e._v(' '),
                        e.notASigner
                          ? e._e()
                          : a('v-select', {
                              attrs: {
                                disabled: e.showOnlyYours,
                                items: e.deptOptions,
                                'item-text': 'text',
                                'item-value': 'value',
                                label: e.loalocale.self.dept,
                              },
                              model: {
                                value: e.selectedDept,
                                callback: function (t) {
                                  e.selectedDept = t;
                                },
                                expression: 'selectedDept',
                              },
                            }),
                      ],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-card-text',
                      [
                        a(
                          'v-sheet',
                          [
                            e.loading
                              ? a('v-progress-linear', {
                                  attrs: { indeterminate: !0 },
                                })
                              : a('v-calendar', {
                                  ref: 'calendar',
                                  staticClass: 'calendar',
                                  attrs: { type: 'month', color: 'primary' },
                                  on: { 'click:date': e.selectDate },
                                  scopedSlots: e._u([
                                    {
                                      key: 'day',
                                      fn: function (t) {
                                        var n = t.date;
                                        return [
                                          a(
                                            'div',
                                            {
                                              staticStyle: {
                                                'font-size': '10px',
                                              },
                                            },
                                            [e._v(e._s(e.getHolidayTitle(n)))]
                                          ),
                                          e._v(' '),
                                          e._l(
                                            e.leaveGroups[n],
                                            function (t, n) {
                                              return [
                                                a(
                                                  'v-menu',
                                                  {
                                                    key: n,
                                                    attrs: {
                                                      'full-width': '',
                                                      'offset-x': '',
                                                      'close-on-content-click': !1,
                                                    },
                                                    scopedSlots: e._u([
                                                      {
                                                        key: 'activator',
                                                        fn: function (o) {
                                                          var s = o.on;
                                                          return [
                                                            a('leave-info', {
                                                              key: n,
                                                              attrs: {
                                                                on: s,
                                                                employee:
                                                                  t.employee,
                                                                record:
                                                                  t.record,
                                                                color: t.color,
                                                                textColor:
                                                                  t.textColor,
                                                                icon: !e.showOnlyUsername,
                                                              },
                                                            }),
                                                          ];
                                                        },
                                                      },
                                                    ]),
                                                    model: {
                                                      value: t.open,
                                                      callback: function (a) {
                                                        e.$set(t, 'open', a);
                                                      },
                                                      expression: 'event.open',
                                                    },
                                                  },
                                                  [
                                                    e._v(' '),
                                                    a('leave-detail-info', {
                                                      attrs: {
                                                        employee: t.employee,
                                                        record: t.record,
                                                      },
                                                      on: {
                                                        signed: e.leaveSigned,
                                                        close: function (e) {
                                                          t.open = !1;
                                                        },
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ];
                                            }
                                          ),
                                        ];
                                      },
                                    },
                                  ]),
                                  model: {
                                    value: e.calendarDate,
                                    callback: function (t) {
                                      e.calendarDate = t;
                                    },
                                    expression: 'calendarDate',
                                  },
                                }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-dialog',
                  {
                    attrs: { 'max-width': '500' },
                    model: {
                      value: e.dialog,
                      callback: function (t) {
                        e.dialog = t;
                      },
                      expression: 'dialog',
                    },
                  },
                  [
                    a('leave-taking-block', {
                      attrs: {
                        leaveTypes: e.leaveTypes,
                        'employee-id': e.loginuser._id,
                        date: e.selectedDate,
                      },
                      on: {
                        taken: e.leaveTaken,
                        picked: e.leavePicked,
                        cancel: e.canceled,
                        notified: function (t) {
                          return (e.systemNotification = t);
                        },
                      },
                    }),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'system-notification',
                  {
                    on: {
                      close: function (t) {
                        e.systemNotification.visible = !1;
                      },
                    },
                    model: {
                      value: e.systemNotification,
                      callback: function (t) {
                        e.systemNotification = t;
                      },
                      expression: 'systemNotification',
                    },
                  },
                  [a('div', [e._v(e._s(e.systemNotification.text))])]
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var xa = a('VU/8')(
          ga,
          _a,
          !1,
          function (e) {
            a('C5G7');
          },
          null,
          null
        ).exports,
        ba = {
          name: 'ShiftConfig',
          props: { readonly: { type: Boolean, default: !0 } },
          data: function () {
            return {
              daypartConf: K.shiftDaypart,
              workday: { morning: {}, noon: {}, general: {} },
              holiday: { morning: {}, noon: {}, general: {} },
              summerMonday: { morning: {} },
              winterMonday: { morning: {} },
            };
          },
          mounted: function () {
            this.getShiftConfig();
          },
          methods: {
            getShiftConfig: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s, r, l;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Be({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                type: 'period',
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data),
                              (o = n.workday),
                              (s = n.holiday),
                              (r = n.summerMonday),
                              (l = n.winterMonday),
                              (e.workday = o),
                              (e.holiday = s),
                              (e.summerMonday = r),
                              (e.winterMonday = l);
                          case 12:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            updateShiftConfig: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n, o, s;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              Me({
                                type: 'period',
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                config: {
                                  workday: e.workday,
                                  holiday: e.holiday,
                                  summerMonday: e.summerMonday,
                                  winterMonday: e.winterMonday,
                                },
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data),
                              (o = n.success),
                              (s = n.message),
                              e.getShiftConfig(),
                              e.$emit('notified', {
                                text: J.lookUpCustomMessage(
                                  s,
                                  e.loalocale.self.message
                                ),
                                level: o ? 'info' : 'warning',
                                visible: !0,
                                handler: function () {},
                              });
                          case 8:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
          },
        },
        ka = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'v-container',
              [
                a(
                  'v-layout',
                  [
                    a(
                      'v-flex',
                      [
                        a('v-text-field', {
                          attrs: { readonly: e.readonly, type: 'text' },
                          model: {
                            value: e.workday.name,
                            callback: function (t) {
                              e.$set(e.workday, 'name', t);
                            },
                            expression: 'workday.name',
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-flex',
                      [
                        a(
                          'v-layout',
                          [
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: {
                                    readonly: e.readonly,
                                    'background-color':
                                      e.daypartConf['早'].color,
                                    type: 'text',
                                  },
                                  model: {
                                    value: e.workday.morning.name,
                                    callback: function (t) {
                                      e.$set(e.workday.morning, 'name', t);
                                    },
                                    expression: 'workday.morning.name',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.workday.morning.startFrom,
                                    callback: function (t) {
                                      e.$set(e.workday.morning, 'startFrom', t);
                                    },
                                    expression: 'workday.morning.startFrom',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.workday.morning.endTo,
                                    callback: function (t) {
                                      e.$set(e.workday.morning, 'endTo', t);
                                    },
                                    expression: 'workday.morning.endTo',
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-flex',
                      [
                        a(
                          'v-layout',
                          [
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: {
                                    readonly: e.readonly,
                                    'background-color':
                                      e.daypartConf['中'].color,
                                    type: 'text',
                                  },
                                  model: {
                                    value: e.workday.noon.name,
                                    callback: function (t) {
                                      e.$set(e.workday.noon, 'name', t);
                                    },
                                    expression: 'workday.noon.name',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.workday.noon.startFrom,
                                    callback: function (t) {
                                      e.$set(e.workday.noon, 'startFrom', t);
                                    },
                                    expression: 'workday.noon.startFrom',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.workday.noon.endTo,
                                    callback: function (t) {
                                      e.$set(e.workday.noon, 'endTo', t);
                                    },
                                    expression: 'workday.noon.endTo',
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-flex',
                      [
                        a(
                          'v-layout',
                          [
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: {
                                    readonly: e.readonly,
                                    'background-color':
                                      e.daypartConf['日'].color,
                                    type: 'text',
                                  },
                                  model: {
                                    value: e.workday.general.name,
                                    callback: function (t) {
                                      e.$set(e.workday.general, 'name', t);
                                    },
                                    expression: 'workday.general.name',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.workday.general.startFrom,
                                    callback: function (t) {
                                      e.$set(e.workday.general, 'startFrom', t);
                                    },
                                    expression: 'workday.general.startFrom',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.workday.general.endTo,
                                    callback: function (t) {
                                      e.$set(e.workday.general, 'endTo', t);
                                    },
                                    expression: 'workday.general.endTo',
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-layout',
                  [
                    a(
                      'v-flex',
                      [
                        a('v-text-field', {
                          attrs: { readonly: e.readonly, type: 'text' },
                          model: {
                            value: e.holiday.name,
                            callback: function (t) {
                              e.$set(e.holiday, 'name', t);
                            },
                            expression: 'holiday.name',
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-flex',
                      [
                        a(
                          'v-layout',
                          [
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: {
                                    readonly: e.readonly,
                                    'background-color':
                                      e.daypartConf['早'].color,
                                    type: 'text',
                                  },
                                  model: {
                                    value: e.holiday.morning.name,
                                    callback: function (t) {
                                      e.$set(e.holiday.morning, 'name', t);
                                    },
                                    expression: 'holiday.morning.name',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.holiday.morning.startFrom,
                                    callback: function (t) {
                                      e.$set(e.holiday.morning, 'startFrom', t);
                                    },
                                    expression: 'holiday.morning.startFrom',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.holiday.morning.endTo,
                                    callback: function (t) {
                                      e.$set(e.holiday.morning, 'endTo', t);
                                    },
                                    expression: 'holiday.morning.endTo',
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-flex',
                      [
                        a(
                          'v-layout',
                          [
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: {
                                    readonly: e.readonly,
                                    'background-color':
                                      e.daypartConf['中'].color,
                                    type: 'text',
                                  },
                                  model: {
                                    value: e.holiday.noon.name,
                                    callback: function (t) {
                                      e.$set(e.holiday.noon, 'name', t);
                                    },
                                    expression: 'holiday.noon.name',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.holiday.noon.startFrom,
                                    callback: function (t) {
                                      e.$set(e.holiday.noon, 'startFrom', t);
                                    },
                                    expression: 'holiday.noon.startFrom',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.holiday.noon.endTo,
                                    callback: function (t) {
                                      e.$set(e.holiday.noon, 'endTo', t);
                                    },
                                    expression: 'holiday.noon.endTo',
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-flex',
                      [
                        a(
                          'v-layout',
                          [
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: {
                                    readonly: e.readonly,
                                    'background-color':
                                      e.daypartConf['日'].color,
                                    type: 'text',
                                  },
                                  model: {
                                    value: e.holiday.general.name,
                                    callback: function (t) {
                                      e.$set(e.holiday.general, 'name', t);
                                    },
                                    expression: 'holiday.general.name',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.holiday.general.startFrom,
                                    callback: function (t) {
                                      e.$set(e.holiday.general, 'startFrom', t);
                                    },
                                    expression: 'holiday.general.startFrom',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.holiday.general.endTo,
                                    callback: function (t) {
                                      e.$set(e.holiday.general, 'endTo', t);
                                    },
                                    expression: 'holiday.general.endTo',
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-layout',
                  [
                    a(
                      'v-flex',
                      [
                        a('v-text-field', {
                          attrs: { readonly: e.readonly, type: 'text' },
                          model: {
                            value: e.summerMonday.name,
                            callback: function (t) {
                              e.$set(e.summerMonday, 'name', t);
                            },
                            expression: 'summerMonday.name',
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-flex',
                      [
                        a(
                          'v-layout',
                          [
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: {
                                    readonly: e.readonly,
                                    'background-color':
                                      e.daypartConf['早'].color,
                                    type: 'text',
                                  },
                                  model: {
                                    value: e.summerMonday.morning.name,
                                    callback: function (t) {
                                      e.$set(e.summerMonday.morning, 'name', t);
                                    },
                                    expression: 'summerMonday.morning.name',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.summerMonday.morning.startFrom,
                                    callback: function (t) {
                                      e.$set(
                                        e.summerMonday.morning,
                                        'startFrom',
                                        t
                                      );
                                    },
                                    expression:
                                      'summerMonday.morning.startFrom',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.summerMonday.morning.endTo,
                                    callback: function (t) {
                                      e.$set(
                                        e.summerMonday.morning,
                                        'endTo',
                                        t
                                      );
                                    },
                                    expression: 'summerMonday.morning.endTo',
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-layout',
                  [
                    a(
                      'v-flex',
                      [
                        a('v-text-field', {
                          attrs: { readonly: e.readonly, type: 'text' },
                          model: {
                            value: e.winterMonday.name,
                            callback: function (t) {
                              e.$set(e.winterMonday, 'name', t);
                            },
                            expression: 'winterMonday.name',
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-flex',
                      [
                        a(
                          'v-layout',
                          [
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: {
                                    readonly: e.readonly,
                                    'background-color':
                                      e.daypartConf['早'].color,
                                    type: 'text',
                                  },
                                  model: {
                                    value: e.winterMonday.morning.name,
                                    callback: function (t) {
                                      e.$set(e.winterMonday.morning, 'name', t);
                                    },
                                    expression: 'winterMonday.morning.name',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.winterMonday.morning.startFrom,
                                    callback: function (t) {
                                      e.$set(
                                        e.winterMonday.morning,
                                        'startFrom',
                                        t
                                      );
                                    },
                                    expression:
                                      'winterMonday.morning.startFrom',
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(' '),
                            a(
                              'v-flex',
                              [
                                a('v-text-field', {
                                  attrs: { readonly: e.readonly, type: 'time' },
                                  model: {
                                    value: e.winterMonday.morning.endTo,
                                    callback: function (t) {
                                      e.$set(
                                        e.winterMonday.morning,
                                        'endTo',
                                        t
                                      );
                                    },
                                    expression: 'winterMonday.morning.endTo',
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'v-layout',
                  [
                    a('v-flex', { attrs: { xs11: '' } }),
                    e._v(' '),
                    a(
                      'v-flex',
                      [
                        e.readonly
                          ? e._e()
                          : a(
                              'v-btn',
                              {
                                staticClass: 'theme',
                                on: { click: e.updateShiftConfig },
                              },
                              [e._v(e._s(e.loalocale.self.update))]
                            ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var wa = {
          name: 'ShiftCalendar',
          components: {
            'page-container': nt,
            'system-notification': se,
            'calendar-controller': It,
            'employee-info': pe,
            'shift-config': a('VU/8')(
              ba,
              ka,
              !1,
              function (e) {
                a('hIHn');
              },
              null,
              null
            ).exports,
          },
          data: function () {
            return {
              calendarDate: J.formatDate('now'),
              systemNotification: {
                level: 'warning',
                text: '',
                visible: !1,
                handler: function () {},
              },
              selectedEmployee: '',
              employees: [],
              daypartConf: K.shiftDaypart,
              holidays: [],
            };
          },
          computed: {
            readonly: function () {
              return (
                ('manager' !== this.loginuser.level &&
                  'admin' !== this.loginuser.level) ||
                this.access.expired
              );
            },
            shiftGroups: function () {
              var e = this,
                t = new Date(
                  this.calendarDateYear,
                  this.calendarDateMonth,
                  0
                ).getDate(),
                a = {};
              return (
                Array.apply(null, { length: t })
                  .map(function (t, a) {
                    return new Date(
                      e.calendarDateYear,
                      e.calendarDateMonth - 1,
                      a + 1
                    );
                  })
                  .filter(function (e) {
                    var t = e.getDay();
                    return 0 !== t && 6 !== t;
                  })
                  .forEach(function (e) {
                    var t = J.formatDate(e);
                    a[t] = [];
                  }),
                this.employees.forEach(function (e) {
                  e.shifts.forEach(function (t) {
                    var n = J.formatDate(t.date);
                    (a[n] = a[n] || []).push({
                      shift: t,
                      employee: e,
                      color: K.shiftEmployee[e.username.toLowerCase()].color,
                    });
                  });
                }),
                Kt()(a).forEach(function (e) {
                  return (a[e] = a[e].sort(function (e, t) {
                    var a = e.shift.daypart,
                      n = t.shift.daypart;
                    return a === n
                      ? 0
                      : ('早' === a && ('中' === n || '日' === n)) ||
                        ('中' === a && '日' === n)
                      ? -1
                      : ('中' === a && '早' === n) ||
                        ('日' === a && ('早' === n || '中' === n))
                      ? 1
                      : void 0;
                  }));
                }),
                a
              );
            },
            access: function () {
              var e = new Date(),
                t = e.getDate(),
                a = e.getMonth() + 1,
                n = e.getFullYear();
              if (
                this.calendarDateYear < n ||
                (this.calendarDateYear === n && this.calendarDateMonth < a)
              )
                return { expired: !0, message: this.loalocale.self.expired };
              if (this.calendarDateMonth === a && this.calendarDateYear === n) {
                var o = Array.apply(null, { length: 7 })
                  .map(function (e, t) {
                    return new Date(n, a, 0 - t);
                  })
                  .filter(function (e) {
                    return 6 !== e.getDay() && 0 !== e.getDay();
                  })[1];
                return {
                  expired: t >= o.getDate(),
                  message:
                    this.loalocale.self.expiredAt + ': ' + J.formatDate(o),
                };
              }
              return {
                expired: !1,
                message:
                  this.loalocale.self.expiredAt +
                  ': ' +
                  this.loalocale.self.workdaysBeforeCurrentMonthEnds.replace(
                    '{0}',
                    2
                  ),
              };
            },
            calendarDateObj: function () {
              return new Date(this.calendarDate);
            },
            calendarDateYear: function () {
              return this.calendarDateObj.getFullYear();
            },
            calendarDateMonth: function () {
              return this.calendarDateObj.getMonth() + 1;
            },
          },
          mounted: function () {
            var e = this;
            return v()(
              u.a.mark(function t() {
                return u.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          e.getHoliday(), e.getShifts();
                        case 2:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  e
                );
              })
            )();
          },
          methods: {
            showPrimary: function (e, t) {
              return (
                e.filter(function (e) {
                  return e.shift.daypart === t.shift.daypart;
                }).length > 1 && t.shift.primary
              );
            },
            download: function () {
              var e = ze.exportShift({
                  year: this.calendarDateYear,
                  month: this.calendarDateMonth,
                  loginuser: this.loginuser.username,
                  token: this.loginuser.token,
                }),
                t = document.createElement('iframe');
              (t.src = e),
                (t.style = 'display:none'),
                document.body.appendChild(t);
            },
            getHoliday: function () {
              var e = this;
              return v()(
                u.a.mark(function t() {
                  var a, n;
                  return u.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              He({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                year: e.calendarDateYear,
                                month: e.calendarDateMonth,
                              })
                            );
                          case 2:
                            (a = t.sent),
                              (n = a.data.holidays),
                              (e.holidays = n);
                          case 5:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            getShifts: function () {
              var e = this,
                t =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
              return v()(
                u.a.mark(function a() {
                  var n, o, s, r;
                  return u.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.next = 2),
                              Oe({
                                loginuser: e.loginuser.username,
                                token: e.loginuser.token,
                                year: e.calendarDateYear,
                                month: e.calendarDateMonth,
                              })
                            );
                          case 2:
                            (n = a.sent),
                              (o = n.data),
                              (s = o.fullControl),
                              (r = o.employees),
                              (e.fullControl = s),
                              (e.employees = e.filter(r)),
                              t &&
                                (e.selectedEmployee =
                                  e.employees.length > 0
                                    ? e.employees[0]
                                    : void 0);
                          case 9:
                          case 'end':
                            return a.stop();
                        }
                    },
                    a,
                    e
                  );
                })
              )();
            },
            filter: function (e) {
              return e.filter(function (e) {
                return K.shiftDepts.includes(e.dept);
              });
            },
            add: function (e, t) {
              var a = this;
              return v()(
                u.a.mark(function n() {
                  var o, s, r, l, i;
                  return u.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (a.readonly) {
                              n.next = 9;
                              break;
                            }
                            return (
                              (o = !a.alreadyHaveShifter(e, t)),
                              (n.next = 4),
                              Ne({
                                loginuser: a.loginuser.username,
                                token: a.loginuser.token,
                                id: a.selectedEmployee._id,
                                shift: { date: e, daypart: t, primary: o },
                              })
                            );
                          case 4:
                            (s = n.sent),
                              (r = s.data),
                              (l = r.success),
                              (i = r.message),
                              l
                                ? a.getShifts(!1)
                                : ((a.systemNotification.level = 'warning'),
                                  (a.systemNotification.text = J.lookUpCustomMessage(
                                    i
                                  )),
                                  (a.systemNotification.visible = !0));
                          case 9:
                          case 'end':
                            return n.stop();
                        }
                    },
                    n,
                    a
                  );
                })
              )();
            },
            alreadyHaveShifter: function (e, t) {
              var a = this;
              return Kt()(this.shiftGroups).some(function (n) {
                return (
                  n === e &&
                  a.shiftGroups[n] &&
                  a.shiftGroups[n].length > 0 &&
                  a.shiftGroups[n].some(function (e) {
                    return e.shift.daypart === t;
                  })
                );
              });
            },
            remove: function (e, t) {
              var a = this;
              return v()(
                u.a.mark(function n() {
                  var o, s, r, l;
                  return u.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (a.readonly) {
                              n.next = 8;
                              break;
                            }
                            return (
                              (n.next = 3),
                              Ne({
                                loginuser: a.loginuser.username,
                                token: a.loginuser.token,
                                id: e,
                                shiftId: t,
                              })
                            );
                          case 3:
                            (o = n.sent),
                              (s = o.data),
                              (r = s.success),
                              (l = s.message),
                              r
                                ? a.getShifts(!1)
                                : ((a.systemNotification.level = 'warning'),
                                  (a.systemNotification.text = J.lookUpCustomMessage(
                                    l
                                  )),
                                  (a.systemNotification.visible = !0));
                          case 8:
                          case 'end':
                            return n.stop();
                        }
                    },
                    n,
                    a
                  );
                })
              )();
            },
            getHolidayTitle: function (e) {
              if (this.holidays.length > 0) {
                var t = new Date(e),
                  a = this.holidays.find(function (e) {
                    return new Date(e.date).toDateString() === t.toDateString();
                  });
                return a ? a.title : '';
              }
              return '';
            },
            formatDate: J.formatDate,
          },
          watch: {
            calendarDate: function () {
              this.getHoliday(), this.getShifts();
            },
          },
        },
        Da = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              'page-container',
              {
                attrs: { title: e.loalocale.self.title, icon: 'schedule' },
                on: {
                  notified: function (t) {
                    return (e.systemNotification = t);
                  },
                },
              },
              [
                a(
                  'v-card',
                  { staticClass: 'elevation-12' },
                  [
                    a(
                      'calendar-controller',
                      {
                        attrs: { calendarDate: new Date(e.calendarDate) },
                        on: {
                          prev: function (t) {
                            return e.$refs.calendar.prev();
                          },
                          next: function (t) {
                            return e.$refs.calendar.next();
                          },
                          tolastest: function (t) {
                            return (e.calendarDate = e.formatDate(t));
                          },
                        },
                      },
                      [
                        e.access.message
                          ? a('v-chip', { attrs: { label: '', outline: '' } }, [
                              e._v(e._s(e.access.message)),
                            ])
                          : e._e(),
                        e._v(' '),
                        a(
                          'v-btn',
                          { on: { click: e.download } },
                          [
                            a('v-icon', [e._v('get_app')]),
                            e._v(
                              '\n        ' +
                                e._s(e.loalocale.self.download) +
                                '\n      '
                            ),
                          ],
                          1
                        ),
                        e._v(' '),
                        e.readonly
                          ? e._e()
                          : a(
                              'v-btn-toggle',
                              {
                                model: {
                                  value: e.selectedEmployee,
                                  callback: function (t) {
                                    e.selectedEmployee = t;
                                  },
                                  expression: 'selectedEmployee',
                                },
                              },
                              e._l(e.employees, function (t) {
                                return a(
                                  'v-tooltip',
                                  { key: t.username, attrs: { bottom: '' } },
                                  [
                                    a(
                                      'v-btn',
                                      {
                                        attrs: { slot: 'activator', value: t },
                                        slot: 'activator',
                                      },
                                      [e._v(e._s(t.username))]
                                    ),
                                    e._v(' '),
                                    a('employee-info', {
                                      attrs: {
                                        profile: t,
                                        icon: '',
                                        email: '',
                                      },
                                    }),
                                  ],
                                  1
                                );
                              }),
                              1
                            ),
                      ],
                      1
                    ),
                    e._v(' '),
                    a(
                      'v-card-text',
                      [
                        a(
                          'v-sheet',
                          [
                            a('v-calendar', {
                              ref: 'calendar',
                              staticClass: 'calendar',
                              attrs: { type: 'month', color: 'primary' },
                              scopedSlots: e._u([
                                {
                                  key: 'day',
                                  fn: function (t) {
                                    var n = t.date;
                                    return [
                                      a(
                                        'div',
                                        {
                                          staticStyle: { 'font-size': '10px' },
                                        },
                                        [e._v(e._s(e.getHolidayTitle(n)))]
                                      ),
                                      e._v(' '),
                                      e.shiftGroups[n] && !e.readonly
                                        ? a(
                                            'v-btn-toggle',
                                            [
                                              a(
                                                'v-chip',
                                                {
                                                  attrs: {
                                                    color:
                                                      e.daypartConf['早'].color,
                                                    outline: '',
                                                    label: '',
                                                  },
                                                  on: {
                                                    click: function (t) {
                                                      return e.add(n, '早');
                                                    },
                                                  },
                                                },
                                                [e._v('早')]
                                              ),
                                              e._v(' '),
                                              a(
                                                'v-chip',
                                                {
                                                  attrs: {
                                                    color:
                                                      e.daypartConf['中'].color,
                                                    outline: '',
                                                    label: '',
                                                  },
                                                  on: {
                                                    click: function (t) {
                                                      return e.add(n, '中');
                                                    },
                                                  },
                                                },
                                                [e._v('中')]
                                              ),
                                              e._v(' '),
                                              a(
                                                'v-chip',
                                                {
                                                  attrs: {
                                                    color:
                                                      e.daypartConf['日'].color,
                                                    outline: '',
                                                    label: '',
                                                  },
                                                  on: {
                                                    click: function (t) {
                                                      return e.add(n, '日');
                                                    },
                                                  },
                                                },
                                                [e._v('日')]
                                              ),
                                            ],
                                            1
                                          )
                                        : e._e(),
                                      e._v(' '),
                                      e._l(e.shiftGroups[n], function (t, o) {
                                        return [
                                          a(
                                            'div',
                                            { key: n + '_' + o },
                                            [
                                              a(
                                                'v-chip',
                                                {
                                                  staticStyle: { width: '95%' },
                                                  attrs: {
                                                    label: '',
                                                    color: t.color,
                                                    'text-color': 'white',
                                                  },
                                                  on: {
                                                    click: function (a) {
                                                      return e.remove(
                                                        t.employee._id,
                                                        t.shift._id
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  a(
                                                    'v-avatar',
                                                    { attrs: { tile: '' } },
                                                    [
                                                      e._v(
                                                        e._s(t.shift.daypart)
                                                      ),
                                                    ]
                                                  ),
                                                  e._v(
                                                    '\n                  ' +
                                                      e._s(
                                                        t.employee.username
                                                      ) +
                                                      '\n                  '
                                                  ),
                                                  e.showPrimary(
                                                    e.shiftGroups[n],
                                                    t
                                                  )
                                                    ? a(
                                                        'v-icon',
                                                        {
                                                          staticClass:
                                                            'primary-shifter',
                                                        },
                                                        [e._v('star_border')]
                                                      )
                                                    : e._e(),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ];
                                      }),
                                    ];
                                  },
                                },
                              ]),
                              model: {
                                value: e.calendarDate,
                                callback: function (t) {
                                  e.calendarDate = t;
                                },
                                expression: 'calendarDate',
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(' '),
                    a('v-divider'),
                    e._v(' '),
                    a('v-card-title', { attrs: { 'primary-title': '' } }, [
                      a('h3', { staticClass: 'headline' }, [
                        e._v('時間段說明'),
                      ]),
                    ]),
                    e._v(' '),
                    a(
                      'v-card-text',
                      [
                        a('shift-config', {
                          attrs: { readonly: e.readonly },
                          on: {
                            notified: function (t) {
                              return (e.systemNotification = t);
                            },
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(' '),
                a(
                  'system-notification',
                  {
                    on: {
                      close: function (t) {
                        e.systemNotification.visible = !1;
                      },
                    },
                    model: {
                      value: e.systemNotification,
                      callback: function (t) {
                        e.systemNotification = t;
                      },
                      expression: 'systemNotification',
                    },
                  },
                  [a('div', [e._v(e._s(e.systemNotification.text))])]
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var Ta = a('VU/8')(
        wa,
        Da,
        !1,
        function (e) {
          a('S2L8');
        },
        null,
        null
      ).exports;
      s.default.use(i.a);
      var Ca = new i.a({
          mode: 'history',
          routes: [
            { path: '/', name: 'Login', component: Wt },
            { path: '/employees', name: 'List', component: rt },
            { path: '/employee/:id', name: 'Detail', component: Ft },
            {
              path: '/employee/:id/records/:query?',
              name: 'RecordList',
              component: St,
            },
            { path: '/report/annual', name: 'AnnualReport', component: Ht },
            { path: '/report/monthly', name: 'MonthlyReport', component: Ot },
            {
              path: '/compensatorylist',
              name: 'CompensatoryList',
              component: Yt,
            },
            { path: '/leavetype', name: 'LeaveTypeInfo', component: Xt },
            { path: '/calendar/leave', name: 'LeaveCalendar', component: xa },
            { path: '/calendar/shift', name: 'ShiftCalendar', component: Ta },
          ],
        }),
        Fa = a('K/Lq'),
        Ea = a.n(Fa),
        La = a('3EgV'),
        Ia = a.n(La),
        Ra = (a('7zck'), a('gJtD'), a('pvO8')),
        Aa = a.n(Ra);
      a('iq7p');
      s.default.use(Aa.a),
        (s.default.config.productionTip = !1),
        s.default.use(Ia.a),
        s.default.use(Ea.a),
        s.default.mixin({
          created: function () {
            this.checkLoginStatus();
          },
          computed: {
            loginuser: function () {
              return JSON.parse(this.$cookie.get('loasystem.loginuser'));
            },
          },
          data: function (e) {
            var t = {},
              a = e && e.$vnode ? e.$vnode.tag : void 0;
            if (a) {
              var n = /-(\w+)$/.exec(a),
                s = o()(n, 2)[1];
              s && (t = { name: s, self: q[s], shared: q.shared });
            }
            return { loalocale: t };
          },
          methods: {
            checkLoginStatus: function () {
              'Login' !== this.$router.history.current.name &&
                (this.$cookie.get('loasystem.loginuser') ||
                  (this.$cookie.delete('loasystem.loginuser'),
                  this.$router.push({ name: 'Login' })));
            },
          },
        }),
        new s.default({
          el: '#app',
          router: Ca,
          myOption: 'hello!',
          components: { App: l },
          template: '<App/>',
        });
    },
    Rvhh: function (e, t) {},
    S2L8: function (e, t) {},
    V9PV: function (e, t) {},
    WVdF: function (e, t) {},
    Xb8K: function (e, t) {},
    YDtG: function (e, t) {},
    Z3gK: function (e, t) {},
    aL4B: function (e, t) {},
    gJtD: function (e, t) {},
    hCUW: function (e, t) {},
    hIHn: function (e, t) {},
    hWTA: function (e, t) {},
    iBKl: function (e, t) {},
    iq7p: function (e, t) {},
    j3mY: function (e, t) {},
    llO3: function (e, t) {},
    m5ff: function (e, t) {},
    mJ9o: function (e, t) {},
    pNjp: function (e, t) {},
    pbEp: function (e, t) {},
    rQOX: function (e, t) {},
    wVz3: function (e, t) {},
    x4EY: function (e, t) {},
    z7RK: function (e, t) {},
  },
  ['NHnr']
);
//# sourceMappingURL=app.c2728f1760c64102413e.js.map
