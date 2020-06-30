(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leaderboards"],{

/***/ "./client/analytics/components/leaderboard/index.js":
/*!**********************************************************!*\
  !*** ./client/analytics/components/leaderboard/index.js ***!
  \**********************************************************/
/*! exports provided: Leaderboard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Leaderboard", function() { return Leaderboard; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @woocommerce/navigation */ "@woocommerce/navigation");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var wc_api_items_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! wc-api/items/utils */ "./client/wc-api/items/utils.js");
/* harmony import */ var analytics_components_report_error__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! analytics/components/report-error */ "./client/analytics/components/report-error/index.js");
/* harmony import */ var lib_sanitize_html__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/sanitize-html */ "./client/lib/sanitize-html/index.js");
/* harmony import */ var wc_api_with_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! wc-api/with-select */ "./client/wc-api/with-select.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./style.scss */ "./client/analytics/components/leaderboard/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_16__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */




/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */






var Leaderboard = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Leaderboard, _Component);

  var _super = _createSuper(Leaderboard);

  function Leaderboard() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Leaderboard);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Leaderboard, [{
    key: "getFormattedHeaders",
    value: function getFormattedHeaders() {
      return this.props.headers.map(function (header, i) {
        return {
          isLeftAligned: i === 0,
          hiddenByDefault: false,
          isSortable: false,
          key: header.label,
          label: header.label
        };
      });
    }
  }, {
    key: "getFormattedRows",
    value: function getFormattedRows() {
      return this.props.rows.map(function (row) {
        return row.map(function (column) {
          return {
            display: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
              dangerouslySetInnerHTML: Object(lib_sanitize_html__WEBPACK_IMPORTED_MODULE_14__["default"])(column.display)
            }),
            value: column.value
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isRequesting = _this$props.isRequesting,
          isError = _this$props.isError,
          totalRows = _this$props.totalRows,
          title = _this$props.title;
      var classes = 'woocommerce-leaderboard';

      if (isError) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(analytics_components_report_error__WEBPACK_IMPORTED_MODULE_13__["default"], {
          className: classes,
          isError: true
        });
      }

      var rows = this.getFormattedRows();

      if (!isRequesting && rows.length === 0) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["Card"], {
          title: title,
          className: classes
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["EmptyTable"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('No data recorded for the selected time period.', 'woocommerce')));
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["TableCard"], {
        className: classes,
        headers: this.getFormattedHeaders(),
        isLoading: isRequesting,
        rows: rows,
        rowsPerPage: totalRows,
        showMenu: false,
        title: title,
        totalRows: totalRows
      });
    }
  }]);

  return Leaderboard;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);
Leaderboard.propTypes = {
  /**
   * An array of column headers.
   */
  headers: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
  })),

  /**
   * String of leaderboard ID to display.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,

  /**
   * Query args added to the report table endpoint request.
   */
  query: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,

  /**
   * Which column should be the row header, defaults to the first item (`0`) (see `Table` props).
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    display: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
    value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool])
  }))).isRequired,

  /**
   * String to display as the title of the table.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,

  /**
   * Number of table rows.
   */
  totalRows: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
};
Leaderboard.defaultProps = {
  rows: [],
  isError: false,
  isRequesting: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(wc_api_with_select__WEBPACK_IMPORTED_MODULE_15__["default"])(function (select, props) {
  var id = props.id,
      query = props.query,
      totalRows = props.totalRows;

  var _select$getSetting = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_11__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var leaderboardQuery = {
    id: id,
    per_page: totalRows,
    persisted_query: Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__["getPersistedQuery"])(query),
    query: query,
    select: select,
    defaultDateRange: defaultDateRange
  };
  var leaderboardData = Object(wc_api_items_utils__WEBPACK_IMPORTED_MODULE_12__["getLeaderboard"])(leaderboardQuery);
  return leaderboardData;
}))(Leaderboard));

/***/ }),

/***/ "./client/analytics/components/leaderboard/style.scss":
/*!************************************************************!*\
  !*** ./client/analytics/components/leaderboard/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./client/dashboard/leaderboards/index.js":
/*!************************************************!*\
  !*** ./client/dashboard/leaderboards/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "./node_modules/@wordpress/components/build-module/index.js");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @woocommerce/wc-admin-settings */ "./client/settings/index.js");
/* harmony import */ var analytics_components_leaderboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! analytics/components/leaderboard */ "./client/analytics/components/leaderboard/index.js");
/* harmony import */ var wc_api_with_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! wc-api/with-select */ "./client/wc-api/with-select.js");
/* harmony import */ var lib_tracks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/tracks */ "./client/lib/tracks.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.scss */ "./client/dashboard/leaderboards/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_13__);




/**
 * External dependencies
 */





/**
 * WooCommerce dependencies
 */




/**
 * Internal dependencies
 */






var renderLeaderboardToggles = function renderLeaderboardToggles(_ref) {
  var allLeaderboards = _ref.allLeaderboards,
      hiddenBlocks = _ref.hiddenBlocks,
      onToggleHiddenBlock = _ref.onToggleHiddenBlock;
  return allLeaderboards.map(function (leaderboard) {
    var checked = !hiddenBlocks.includes(leaderboard.id);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
      checked: checked,
      isCheckbox: true,
      isClickable: true,
      key: leaderboard.id,
      onInvoke: function onInvoke() {
        onToggleHiddenBlock(leaderboard.id)();
        Object(lib_tracks__WEBPACK_IMPORTED_MODULE_12__["recordEvent"])('dash_leaderboards_toggle', {
          status: checked ? 'off' : 'on',
          key: leaderboard.id
        });
      }
    }, leaderboard.label);
  });
};

var renderLeaderboards = function renderLeaderboards(_ref2) {
  var allLeaderboards = _ref2.allLeaderboards,
      hiddenBlocks = _ref2.hiddenBlocks,
      query = _ref2.query,
      rowsPerTable = _ref2.rowsPerTable;
  return allLeaderboards.map(function (leaderboard) {
    if (hiddenBlocks.includes(leaderboard.id)) {
      return undefined;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(analytics_components_leaderboard__WEBPACK_IMPORTED_MODULE_10__["default"], {
      headers: leaderboard.headers,
      id: leaderboard.id,
      key: leaderboard.id,
      query: query,
      title: leaderboard.label,
      totalRows: rowsPerTable
    });
  });
};

var Leaderboards = function Leaderboards(props) {
  var allLeaderboards = props.allLeaderboards,
      Controls = props.controls,
      isFirst = props.isFirst,
      isLast = props.isLast,
      hiddenBlocks = props.hiddenBlocks,
      onMove = props.onMove,
      onRemove = props.onRemove,
      onTitleBlur = props.onTitleBlur,
      onTitleChange = props.onTitleChange,
      onToggleHiddenBlock = props.onToggleHiddenBlock,
      query = props.query,
      title = props.title,
      titleInput = props.titleInput;

  var _useUserPreferences = Object(_woocommerce_data__WEBPACK_IMPORTED_MODULE_8__["useUserPreferences"])(),
      updateUserPreferences = _useUserPreferences.updateUserPreferences,
      userPrefs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_useUserPreferences, ["updateUserPreferences"]);

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(parseInt(userPrefs.dashboard_leaderboard_rows || 5, 10)),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      rowsPerTable = _useState2[0],
      setRowsPerTableState = _useState2[1];

  var setRowsPerTable = function setRowsPerTable(rows) {
    setRowsPerTableState(parseInt(rows, 10));
    var userDataFields = {
      dashboard_leaderboard_rows: parseInt(rows, 10)
    };
    updateUserPreferences(userDataFields);
  };

  var renderMenu = function renderMenu() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["EllipsisMenu"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Choose which leaderboards to display and other settings', 'woocommerce'),
      renderContent: function renderContent(_ref3) {
        var onToggle = _ref3.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["MenuTitle"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Leaderboards', 'woocommerce')), renderLeaderboardToggles({
          allLeaderboards: allLeaderboards,
          hiddenBlocks: hiddenBlocks,
          onToggleHiddenBlock: onToggleHiddenBlock
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
          className: "woocommerce-dashboard__dashboard-leaderboards__select",
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Rows Per Table', 'woocommerce'),
          value: rowsPerTable,
          options: Array.from({
            length: 20
          }, function (v, key) {
            return {
              v: key + 1,
              label: key + 1
            };
          }),
          onChange: setRowsPerTable
        }), window.wcAdminFeatures['analytics-dashboard/customizable'] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Controls, {
          onToggle: onToggle,
          onMove: onMove,
          onRemove: onRemove,
          isFirst: isFirst,
          isLast: isLast,
          onTitleBlur: onTitleBlur,
          onTitleChange: onTitleChange,
          titleInput: titleInput
        }));
      }
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "woocommerce-dashboard__dashboard-leaderboards"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_7__["SectionHeader"], {
    title: title || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Leaderboards', 'woocommerce'),
    menu: renderMenu()
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "woocommerce-dashboard__columns"
  }, renderLeaderboards({
    allLeaderboards: allLeaderboards,
    hiddenBlocks: hiddenBlocks,
    query: query,
    rowsPerTable: rowsPerTable
  }))));
};

Leaderboards.propTypes = {
  query: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(wc_api_with_select__WEBPACK_IMPORTED_MODULE_11__["default"])(function (select) {
  var _select = select('wc-api'),
      getItems = _select.getItems,
      getItemsError = _select.getItemsError,
      isGetItemsRequesting = _select.isGetItemsRequesting;

  var _getSetting = Object(_woocommerce_wc_admin_settings__WEBPACK_IMPORTED_MODULE_9__["getSetting"])('dataEndpoints', {
    leaderboards: []
  }),
      allLeaderboards = _getSetting.leaderboards;

  return {
    allLeaderboards: allLeaderboards,
    getItems: getItems,
    getItemsError: getItemsError,
    isGetItemsRequesting: isGetItemsRequesting
  };
}))(Leaderboards));

/***/ }),

/***/ "./client/dashboard/leaderboards/style.scss":
/*!**************************************************!*\
  !*** ./client/dashboard/leaderboards/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./client/lib/sanitize-html/index.js":
/*!*******************************************!*\
  !*** ./client/lib/sanitize-html/index.js ***!
  \*******************************************/
/*! exports provided: ALLOWED_TAGS, ALLOWED_ATTR, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLOWED_TAGS", function() { return ALLOWED_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLOWED_ATTR", function() { return ALLOWED_ATTR; });
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

var ALLOWED_TAGS = ['a', 'b', 'em', 'i', 'strong', 'p'];
var ALLOWED_ATTR = ['target', 'href', 'rel', 'name', 'download'];
/* harmony default export */ __webpack_exports__["default"] = (function (html) {
  return {
    __html: Object(dompurify__WEBPACK_IMPORTED_MODULE_0__["sanitize"])(html, {
      ALLOWED_TAGS: ALLOWED_TAGS,
      ALLOWED_ATTR: ALLOWED_ATTR
    })
  };
});

/***/ })

}]);
//# sourceMappingURL=leaderboards.92beb8389d98bc8fb47f.min.js.map
