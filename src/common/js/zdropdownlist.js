"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(function (ZC, $) {
  var ZDropdownList =
  /*#__PURE__*/
  function (_ZC$ZListBox) {
    _inherits(ZDropdownList, _ZC$ZListBox);

    function ZDropdownList() {
      _classCallCheck(this, ZDropdownList);

      return _possibleConstructorReturn(this, _getPrototypeOf(ZDropdownList).apply(this, arguments));
    }

    _createClass(ZDropdownList, [{
      key: "_init",
      value: function _init(ele, options) {
        var opts = this._opts,
            data = this._data;
        data.attrs = data.attrs || {};
        data.attrs.role = 'dropdown'; // No I18N

        this._userOptions = $.extend({}, options);

        this._validateOpts();

        this._constructTitleBar();

        if (opts.commandBar || this._defaultCBar) {
          this._constructBtns();
        }

        _get(_getPrototypeOf(ZDropdownList.prototype), "_init", this).apply(this, arguments);
      }
    }, {
      key: "_constructTitleBar",
      value: function _constructTitleBar() {
        var opts = this._opts,
            data = this._data;
        data.title = opts.title;
        data.close = opts.closeButton ? this._getCloseProps() : null;
      }
    }, {
      key: "_validateOpts",
      value: function _validateOpts() {
        var opts = this._opts,
            userOpts = this._userOptions,
            selectOnKeyNavigation = userOpts.selectOnKeyNavigation,
            focusItemOnItemMouseover = userOpts.focusItemOnItemMouseover,
            isSingle = this._isSingle = !this._opts.multiple;
        this._forElement = opts.forElement && $(opts.forElement);
        this._data.isCallout = opts.displayType === 'callout'; // No I18N

        opts.selectOnKeyNavigation = selectOnKeyNavigation === null && focusItemOnItemMouseover === null ? isSingle : selectOnKeyNavigation;
        opts.focusItemOnItemMouseover = focusItemOnItemMouseover === null && selectOnKeyNavigation === null ? !isSingle : focusItemOnItemMouseover;
        /* After a discussion, we concluded that if focusFirstItemOnOpen is true, then focusFirstResult should also be true */

        if (opts.focusFirstItemOnOpen) {
          opts.search.focusFirstResult = true;
        }
        /* Validating buttons and setting default commandBar */


        this._defaultCBar = null;

        if (!opts.commandBar && (opts.doneButton || opts.resetButton || opts.clearButton)) {
          this._setDefaultCBar();
        }
        /* As discussed, when command buttons are present, focus should be navigating within the container */


        opts.handleFocusNavigation = opts.handleFocusNavigation === null ? !!(opts.commandBar || this._defaultCBar) : opts.handleFocusNavigation;
      }
    }, {
      key: "_initialRender",
      value: function _initialRender() {
        /* Handling for loading the data only when open called */
        if (this._initialized) {
          this._search();
        } else {
          this._renderView([]);
        }
      }
    }, {
      key: "_postRender",
      value: function _postRender() {
        _get(_getPrototypeOf(ZDropdownList.prototype), "_postRender", this).apply(this, arguments);

        if (!this._useParent) {
          this.container.attr('id', this._getID(this.element) + '-' + this.name); // No I18N
        }
        /* After a meeting, we have decided to provide focusHandler only based on needs and no need to include it in build.json */


        this._opts.handleFocusNavigation && ZC.FocusHandler && ZC.FocusHandler.init(this.container);

        this._setShowHideOpts();

        this._appendEle(this._opts.appendTo);
        /* Removed due to an issue which removes this class in showhidehandler. So, ht and scollCls shouldn't be added before calling showhideHandler */


        this._listBody.removeClass('zh-scroll_y'); // No I18N


        this.container[0].style.display = 'none'; // No I18N
      }
    }, {
      key: "_fixMidHt",
      value: function _fixMidHt() {
        /* Height need not to be set from listbox. Hence it is overwritten */
      }
    }, {
      key: "_postEachRender",
      value: function _postEachRender(element, data) {
        _get(_getPrototypeOf(ZDropdownList.prototype), "_postEachRender", this).apply(this, arguments);

        var modifiedAttr = data.attrModified,
            firstRender = !data.rendered,
            value = this._opts.value;

        if (firstRender || modifiedAttr) {
          if ((firstRender || ['title', 'closeButton'].indexOf(modifiedAttr) > -1) && data.close && !data.close.mainElement) {
            // No I18N
            this._updateCloseEle();
          }

          if (data.isCallout && !this._pointer) {
            this._pointer = this.container.find('.zdropdownlist__pointer'); // No I18N

            this._setShowHideOpts();
          }

          data.attrModified = undefined;
        }

        if ((firstRender || this._btnAttrChanged) && this._isBtns) {
          // No I18N
          this._btnAttrChanged = undefined;

          this._updateBtns();
        }

        if (this._isSingle && value && this._toArr(value).length) {
          // No I18N
          this._savePrevSelection(this._selectedItems[0].id);
        }
      }
    }, {
      key: "_getClass",
      value: function _getClass() {
        var clsName = _get(_getPrototypeOf(ZDropdownList.prototype), "_getClass", this).apply(this, arguments),
            data = this._data;

        clsName += data.title ? ' zdropdownlist--withtitle' : ''; // No I18N

        clsName += data.close && !data.title ? ' zdropdownlist--withclose' : ''; // No I18N

        return clsName;
      }
    }, {
      key: "_setVisibility",
      value: function _setVisibility(orgEvent) {
        var isInputFld = this.inputField && !this._showSearchField,
            warningMsg = this._status,
            doNotShowNoResults = warningMsg === 'noresults' && !this._opts.search.showNoResultsMessage; // No I18N

        if (isInputFld && (warningMsg === 'minkeywordlength' || doNotShowNoResults)) {
          // No I18N
          this.close(orgEvent);
        } else if (!isInputFld && doNotShowNoResults) {
          this._hide(this._listBody);
        } else {
          var fixHt;

          if (this.container.attr('data-loading') !== String(this._loading) || this.container.attr('data-noresults') !== String(this._noResults)) {
            // No I18N
            fixHt = true;
          }

          _get(_getPrototypeOf(ZDropdownList.prototype), "_setVisibility", this).apply(this, arguments);
          /* Updating the list height when loader, no_results message or warning message is shown */


          if (fixHt && this._isShown && this._freshRequest) {
            ZC.Helpers.fixHeight(this.container, this._showHideProps);
          }
        }
      }
    }, {
      key: "_trigger",
      value: function _trigger(customEvent, evObj) {
        /* By default, listbox will have the autocomplete behavior. To overwrite it, selected data alone is stored when change triggered
            and actual change event of dropdownlist is triggered when the selected value is committed. */
        if (customEvent === 'change') {
          // No I18N
          var type = evObj && evObj.type,
              opts = this._opts,
              btnClicked = this._btnClicked,
              isCommitted = type && ['keydown', 'mouseup'].indexOf(type) > -1; // No I18N

          /* done should be considered for commiting only when the value is manually selected */

          var returnFalse = this._doneBtn ? isCommitted ? btnClicked !== 'done' : false : btnClicked ? false : this._isSingle && opts.selectOnKeyNavigation && isCommitted; // No I18N

          if (this._internalChange || returnFalse) {
            return false;
          }
        }

        return _get(_getPrototypeOf(ZDropdownList.prototype), "_trigger", this).apply(this, arguments);
      }
    }, {
      key: "_triggerUpdate",
      value: function _triggerUpdate(orgEvent, eventData) {
        if ((this._freshRequest || this._updateHtAndPos) && this._isShown && this._direction) {
          this._updatePos(null, orgEvent);
        }

        return this._trigger('update', orgEvent, eventData); // No I18N
      }
    }, {
      key: "_triggerBeforeUpdate",
      value: function _triggerBeforeUpdate(orgEvent, eventData) {
        return this._trigger('beforeupdate', orgEvent, eventData); // No I18N
      }
    }, {
      key: "_itemClickHandler",
      value: function _itemClickHandler(evObj, item, itemData) {
        _get(_getPrototypeOf(ZDropdownList.prototype), "_itemClickHandler", this).apply(this, arguments);

        var shouldClose;

        if (itemData.itemMappedData.moreresults) {
          shouldClose = true;
        } else if (this._isSingle && !this._doneBtn && evObj.type === 'mouseup') {
          // No I18N
          if (this._getStoredData(item).selectable) {
            this._saveCommitedItemData(item);
          }

          shouldClose = true;
        }

        shouldClose && this.close(evObj);
      }
    }, {
      key: "_saveCommitedItemData",
      value: function _saveCommitedItemData(item) {
        var curSelected = this._curSelectedItem,

        /* curSelected will be undefined when no change happened and space/enter pressed over already selected item */
        shouldCommit = item ? item.is('.' + this.CLASSES.item) : curSelected && curSelected !== this._prevSelectedItem; // No I18N

        if (!shouldCommit && this._opts.focusItemOnItemMouseover) {
          item = this.getFocussed();

          if (item) {
            shouldCommit = true;
          }
        }

        if (shouldCommit) {
          if (item) {
            curSelected = '#' + item.attr('id'); // No I18N
          }

          this._curSelectedItemData = this._getItemEventData($(curSelected));
          this._curSelectedItem = curSelected;
          this._isCommitted = true;
        }
      }
    }, {
      key: "_selectItem",
      value: function _selectItem(item) {
        var response = _get(_getPrototypeOf(ZDropdownList.prototype), "_selectItem", this).apply(this, arguments);

        if (response !== false) {
          var selectedItems = this._selectedItems;

          if (this._isSingle) {
            if (selectedItems.length) {
              this._valCleared = false;
              var selectedItemData = selectedItems[0];
              this._curSelectedItem = '#' + selectedItemData.id; // No I18N

              /* curSelectedItemData saves the data that has to be passed while triggering change */

              this._curSelectedItemData = this._getItemEventData(item.length ? item : this._getById(item.id));
            } else if (this._valCleared) {
              /* If value cleared using setAttribute, deselectValues or in any means */
              this._curSelectedItem = this._curSelectedItemData = this._prevSelectedItem = this._prevSelectedItemData = null;
            }
          }

          if (this._isBtns && this._isShown) {
            /* To avoid changes that is done while opening the list */
            this._updateBtnsOnItemSelect();
          }
        }

        return response;
      }
    }, {
      key: "_keydownActions",
      value: function _keydownActions(evObj) {
        var isBtnClicked = this._btnClicked,
            response = isBtnClicked ? true : _get(_getPrototypeOf(ZDropdownList.prototype), "_keydownActions", this).apply(this, arguments);

        if (isBtnClicked) {
          this._resetFocus(isBtnClicked, evObj);
        } else {
          var keyCode = ZC.keyCode,
              keyPressed = evObj.keyCode,
              opts = this._opts,
              isTab = keyCode.TAB === keyPressed && !this._isBtns,
              doNotClose,
              isSingle = this._isSingle,
              hasSelectableItem = this._getStoredData($(this.getFocussed())).selectable,
              shouldCommit = keyCode.ENTER === keyPressed && opts.selectOnEnterKey || keyCode.SPACE === keyPressed && !this.inputField,
              isTabOrEsc = keyCode.ESCAPE === keyPressed || isTab;

          if (keyCode.ESCAPE === keyPressed) {
            /* If list is present within some dialog or something, esc key should not close the dialog, hence it is prevented when the focus is on dropdown list */
            evObj.stopPropagation();
            evObj.preventDefault();
          }

          if (isTabOrEsc || isSingle && opts.keyNavigation && shouldCommit) {
            /* this._curSelectedItem is checked because, when searchfield present and searched for a text for which no results present and when enter key pressed -> list should not be closed */

            /* has-focus check is added for header or footer items being not selectable when selectionFollowsFocus is true */
            if (isSingle && !this._doneBtn && (shouldCommit || isTab && opts.selectOnTabPress) && hasSelectableItem) {
              // No I18N
              this._saveCommitedItemData();
            } else if (!isTabOrEsc) {
              doNotClose = true;
            }

            !doNotClose && this.close(evObj);
          }
        }

        return response;
      }
    }, {
      key: "_setAriaAttrs",
      value: function _setAriaAttrs(hidden) {
        this.container.attr({
          'aria-hidden': !!hidden,
          // No I18N
          'aria-expanded': !hidden // No I18N

        });

        this._forElement.attr({
          'aria-expanded': !hidden // No I18N

        });
      }
    }, {
      key: "_setShowHideOpts",
      value: function _setShowHideOpts() {
        var _this = this;

        /* opts that are need to be passed to zshowhidehandler */
        var opts = this._opts,
            CLASSES = this.CLASSES,
            animateCallback = this._animateOpenOrClose && this._animateOpenOrClose.bind(this);

        this._showHideProps = {
          cname: this.name,
          forElement: this._forElement,
          isCE: this.isCE,
          rtl: opts.rtl,
          originalElement: this.element,
          bodyCls: CLASSES.body,
          // No I18N
          headerCls: CLASSES.header,
          // No I18N
          footerCls: CLASSES.footer,
          // No I18N
          widthCls: 'zdropdownlist__width',
          // No I18N
          arrowElement: this._pointer,
          arrowCallback: this._arrowCallback.bind(this),
          direction: opts.position,
          offset: opts.margin,
          position: opts.offset,
          appendTo: opts.appendTo,
          hideMethodName: 'close',
          // No I18N
          hideEventName: 'close',
          // No I18N
          onShowWithAnimation: animateCallback,
          onHideWithAnimation: animateCallback,
          beforeFocus: function beforeFocus() {
            return false;
          }
          /* Focus handling in showHideHandler is prevented because, based on the searchfield presence, focus should be set. */

        };
        ['height', 'viewport', 'displayType', 'positionAlterable', 'animation'].forEach(function (opt) {
          return _this._showHideProps[opt] = opts[opt];
        }); // No I18N

        var minWidth = parseFloat(opts.minWidth || 0),
            width = parseFloat(opts.width || 0);

        if (minWidth > width) {
          this._showHideProps.minWidth = minWidth;
        } else {
          this._showHideProps.width = width;
        }
      }
    }, {
      key: "_arrowCallback",
      value: function _arrowCallback(ele, direction) {
        var classes = {
          top: 'zh-top',
          // No I18N
          bottom: 'zh-bottom',
          // No I18N
          left: 'zh-left',
          // No I18N
          right: 'zh-right' // No I18N

        },
            pointerCls = classes[direction],
            pointerEle = this._pointer,
            pointerbg = 'zdropdownlist--pointerwithbg'; // No I18N

        if ($(pointerEle).length && !pointerEle.hasClass(pointerCls)) {
          pointerEle.removeClass(this._prevArrowCls || '');
          pointerEle.addClass(pointerCls);
          this._prevArrowCls = pointerCls;
        }

        if (this.inputField || this._data.title || this._data.close) {
          this._updateClass(pointerbg, ['top', 'bottom'].indexOf(direction) < 0); // No I18N

        }
      }
    }, {
      key: "_focusInHandler",
      value: function _focusInHandler(evObj) {
        _get(_getPrototypeOf(ZDropdownList.prototype), "_focusInHandler", this).apply(this, arguments);

        var inputFld = this.inputField,
            orgEv = evObj && evObj.originalEvent,
            isBtns;

        if (this._isBtns && orgEv && !this._isItemsNavigation) {
          // No I18N
          var target = $(evObj.target);
          isBtns = !this._btnClicked && !target.hasClass('has-mfocus') && target.is('.clear-zdropdownlist,.done-zdropdownlist,.reset-zdropdownlist'); // No I18N
        }
        /* handleEvents is given for internal use ALONE for tokenfield case. Where some of the handlings like pressing keydown
        should open the list, left arrow should close the list when it reaches the top for which this option has been included. */


        if (!isBtns && inputFld && this._opts.searchFieldOptions.handleEvents && document.activeElement !== inputFld[0]) {
          inputFld[0].focus();
        }
      }
    }, {
      key: "_storeForElement",
      value: function _storeForElement(forElement) {
        this._opts.forElement = forElement;
        this._forElement = $(forElement);

        this._setShowHideOpts();
      }
    }, {
      key: "_savePrevSelection",
      value: function _savePrevSelection(selectedItemId) {
        if (selectedItemId) {
          selectedItemId = '#' + selectedItemId;
        }

        this._prevSelectedItem = this._curSelectedItem || selectedItemId;
        this._prevSelectedItemData = this._curSelectedItemData && this._curSelectedItemData.itemData || selectedItemId && this._selectedItems[0].originalData;
      }
    }, {
      key: "_updateSelectedItem",
      value: function _updateSelectedItem(evObj) {
        var curSelected = this._curSelectedItem,
            previousValue = this._prevSelectedItemData,
            orgEv = evObj && evObj.originalEvent,
            opts = this._opts,
            prevValId = this._getPrevValId();

        if (this._isCommitted || this._opts.autoCommit) {
          /* autoCommit - used in combobox for autocomplete behavior */
          this._savePrevSelection();
          /* For focusItemOnItemMouseover case, change will not be triggered only when selection happens on tab press. Hence it is handled here */


          if (opts.selectOnKeyNavigation || opts.focusItemOnItemMouseover && orgEv && orgEv.type === 'keydown' && orgEv.keyCode === ZC.keyCode.TAB) {
            this._dispatchEvent('change', evObj, _objectSpread({}, this._curSelectedItemData, {
              previousValue: previousValue ? [previousValue] : undefined,
              value: [this._prevSelectedItemData]
            }));
          }
        } else if (curSelected && curSelected !== prevValId) {
          /* If value set through setValue or using some other methods, isCommitted won't be set at that case */

          /* Clearing the uncommitted selection */
          this._select(false, $(curSelected), null, evObj);

          this._unFocusItem();
          /* Selecting the previous value */


          previousValue && this._select(true, null, previousValue, evObj);
        }

        this._isCommitted = this._curSelectedItem = this._curSelectedItemData = undefined;
      }
    }, {
      key: "_getPrevValId",
      value: function _getPrevValId() {
        var prevValue = this._prevSelectedItemData;
        return prevValue ? '#' + this._getItemId(prevValue) : undefined;
      }
    }, {
      key: "_setScrollPos",
      value: function _setScrollPos(evObj) {
        var itemToScroll,
            opts = this._opts,
            isSingle = this._isSingle,
            focusFirstItemOnOpen = opts.focusFirstItemOnOpen,
            prevSelected = this._prevSelectedItemData,
            focusSelected = opts.focusSelectedItemOnOpen,
            selectedEle,
            prevSelectedEle = $(this._getPrevValId());

        if (focusSelected) {
          if (isSingle) {
            selectedEle = prevSelectedEle.length && prevSelectedEle.is(':visible') ? prevSelectedEle : undefined; // No I18N
          } else {
            selectedEle = $(this._listBody.find('.' + this.CLASSES.item + '.is-selected')[0]); // No I18N

            if (!selectedEle.length || !selectedEle.is(':visible')) {
              // No I18N

              /* If none of the item is selected or the selected item is not visible */
              selectedEle = undefined;
            }
          }
        }

        if (focusSelected && selectedEle) {
          if (isSingle) {
            /* Retaining the last selection and scrolling it to view */
            this._select(true, null, prevSelected, evObj, true);
          } else {
            itemToScroll = selectedEle;
          }
        } else if (focusFirstItemOnOpen) {
          itemToScroll = this.getFirstValidItem();
        }

        if (itemToScroll) {
          itemToScroll = $(itemToScroll);

          this._select(true, itemToScroll, null, evObj, true);
        }
        /* Resetting the scrollTop */


        if ((!itemToScroll || focusFirstItemOnOpen) && !prevSelected) {
          this._lastScrollTop = 0;

          this._setScrollTop();
        }
      }
    }, {
      key: "_focusLastFocussed",
      value: function _focusLastFocussed() {
        if (!this._fromOpenMethod || this.params.query) {
          return _get(_getPrototypeOf(ZDropdownList.prototype), "_focusLastFocussed", this).apply(this, arguments);
        }
      }
    }, {
      key: "_select",
      value: function _select(selectOrFocus, item, selectPrev, evObj, doNotSelect) {
        this._internalChange = true;

        if (selectPrev) {
          selectOrFocus = true;
          item = $(this._getPrevValId());
        }

        if (!doNotSelect) {
          this._navInstance[selectOrFocus ? 'selectItem' : 'deSelectItem'](item, evObj); // No I18N

        }

        if (selectOrFocus) {
          /* Selected item is focussed */
          this._focusEle(item, evObj, true);
        }

        this._internalChange = false;
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        var opts = this._opts,
            container = this.container;
        Object.keys(opts.animation).length && ZC.clearAnimationData(container);
        opts.handleFocusNavigation && ZC.FocusHandler && ZC.FocusHandler.destroy(container);
        this.element.removeData('zshowhide actualDirection arrowDirection arrowPosition availableHeight availableWidth componentName direction elementPosition pos prevDirection'); // No I18N

        if (this.isCE) {
          this.element.removeClass(this._data.className).empty();
        }

        _get(_getPrototypeOf(ZDropdownList.prototype), "_destroy", this).apply(this, arguments);
      }
    }, {
      key: "_search",
      value: function _search(query, searchOpts) {
        this._focussed = true;
        /* It is added since focusFirstResult will work only when the list is focussed */

        this._updateHtAndPos = true;
        var evObj = searchOpts.event,
            isInputFld = this.inputField && !this._showSearchField;

        _get(_getPrototypeOf(ZDropdownList.prototype), "_search", this).apply(this, arguments);

        if (!this._isShown && (searchOpts.shouldOpen || isInputFld && evObj && evObj.target === this.inputField[0])) {
          if (isInputFld) {
            searchOpts.shouldOpen = false;
            /* Because even when shouldOpen is true, warningMsg has to be checked */
          }

          var warningMsg = this._status,
              open = searchOpts.shouldOpen || (warningMsg === 'noresults' ? this._opts.search.showNoResultsMessage : warningMsg !== 'minkeywordlength'); // No I18N

          if (open) {
            this.open({
              fromSearch: true
            }, evObj);
          }
        }

        this._updateHtAndPos = false;
      }
    }, {
      key: "_callOpen",
      value: function _callOpen(props) {
        return ZC.Helpers.open(this.container, props || this._showHideProps);
      }
    }, {
      key: "_setValues",
      value: function _setValues(values, properties) {
        /* Autocomplete cases in combobox need this behavior */
        var setInternalChange = properties && properties.commit === false;

        if (setInternalChange) {
          this._internalChange = true;
        }

        _get(_getPrototypeOf(ZDropdownList.prototype), "_setValues", this).apply(this, arguments);

        if (this._isSingle) {
          if (this._selectedItems.length) {
            this._savePrevSelection(this._selectedItems[0].id);
          }
        }

        if (setInternalChange) {
          this._internalChange = false;
        }
      }
    }, {
      key: "_reSearch",
      value: function _reSearch() {
        this.params.previousQuery = this.params.query = undefined;

        if (this._isShown) {
          _get(_getPrototypeOf(ZDropdownList.prototype), "_reSearch", this).call(this);
        } else {
          this._shouldReSearch = true;
        }
      }
    }, {
      key: "_focusItemUsingNavInstance",
      value: function _focusItemUsingNavInstance($item, orgEvent) {
        var scrollToView = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        this._navInstance.focusItem($item, orgEvent, scrollToView);
      }
    }, {
      key: "_openHandler",
      value: function _openHandler(evObj) {
        var dispatchEv = this._dispatchEvent.bind(this);

        this._isShown = true;

        this._setAriaAttrs();

        if (dispatchEv('beforefocus', evObj)) {
          // No I18N
          this.setFocus();
        }

        dispatchEv('open', evObj); // No I18N
      }
    }, {
      key: "_closeHandler",
      value: function _closeHandler(evObj) {
        if (Object.keys(this._opts.animation).length) {
          this._display(true, this.container);
        }

        ZC.Helpers.removeScrollClass(this.element);

        this._setAriaAttrs(true);

        this._dispatchEvent('close', evObj); // No I18N


        if (this._isSingle && this._curSelectedItem) {
          this._updateSelectedItem(evObj);
        } else {
          this._unFocusItem();
        }
      }
    }, {
      key: "_focusCallback",
      value: function _focusCallback() {
        this._focussed = true;

        _get(_getPrototypeOf(ZDropdownList.prototype), "_focusCallback", this).apply(this, arguments);
      }
    }, {
      key: "open",
      value: function open() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var evObj = arguments.length > 1 ? arguments[1] : undefined;

        if (!this._isShown) {
          var opts = this._opts,
              shouldOpen = true,
              isSearchFld = opts.searchField,
              minKeywordLength = options.minKeywordLength === undefined ? opts.search.minKeywordLength : options.minKeywordLength,
              searchQuery;

          if (options.searchQuery !== undefined) {
            /* It might also have empty string */
            searchQuery = options.searchQuery;
          } else if (isSearchFld) {
            searchQuery = this.inputField.val();
          } else if (this._shouldReSearch) {
            searchQuery = this.params.query || '';
          }

          if (minKeywordLength && searchQuery !== undefined && !this._shouldReSearch) {
            shouldOpen = this._opts.search.showNoResultsMessage || searchQuery.length >= minKeywordLength;
          }

          if (shouldOpen && this._dispatchEvent('beforeopen', evObj)) {
            this._fromOpenMethod = true;
            /* Included for focusLastFocussed case and while _search calling it has to be checked whether it is called when open executing since isShown can't be used because open is called after search */

            if (options.forElement) {
              this._storeForElement(options.forElement);
            }

            if (!this._initialized) {
              this._initialized = true;
              searchQuery = searchQuery || '';
            }

            options.event = evObj;
            !options.fromSearch && searchQuery !== undefined && this.search(searchQuery, options);

            if (opts.offset) {
              this._callOpen();
            } else {
              this._updatePos(true, evObj);
            }

            this._opts.handleFocusNavigation && ZC.FocusHandler && ZC.FocusHandler.refresh(this.container);
            /* If open is called from search, then focusFirstResult should have the higher priority */

            if (!options.fromSearch || !opts.search.focusFirstResult) {
              this._setScrollPos(evObj);
            }

            if (this._isBtns) {
              this._handleBtnsOnOpen();
            }

            var animation = opts.animation;
            animation = Object.keys(animation).length ? animation.open : null;

            if (!animation) {
              this._openHandler(evObj);
            }

            this._fromOpenMethod = this._shouldReSearch = false;
          }
        }
      }
    }, {
      key: "close",
      value: function close(evObj) {
        var dispatchEv = this._dispatchEvent.bind(this),
            container = this.container,
            inputFld = this.inputField;

        if (this._isShown && dispatchEv('beforeclose', evObj)) {
          // No I18N
          ZC.Helpers.close(container, _objectSpread({}, this._showHideProps, {
            event: evObj
          }));
          this._maxHt = this._direction = undefined;
          this._isShown = false;
          /* Clearing the last searched value */

          if (!this._opts.searchField && inputFld && inputFld.val().length) {
            this.search('', {
              // No I18N
              event: evObj
            });
          }

          if (this._doneBtn && this._valueChanged && !this._doneClicked) {
            this._internalChange = true;

            this._resetClickHandler(evObj, true);
          }

          this._valueChanged = undefined;
          var animation = this._opts.animation;
          animation = Object.keys(animation).length ? animation.close : null;

          if (!animation) {
            this._closeHandler(evObj);
          }
        }
      }
    }, {
      key: "setFocus",
      value: function setFocus(orgEvent) {
        if (this._trigger('beforefocus', orgEvent)) {
          // No I18N
          this.container.focus();

          this._focusInHandler(orgEvent);
        }
      }
    }, {
      key: "getValue",
      value: function getValue() {
        var prevData = this._prevSelectedItemData;
        return this._isSingle && this._opts.selectOnKeyNavigation ? prevData ? [prevData] : undefined : this._opts.value;
      }
    }, {
      key: "deselect",
      value: function deselect() {
        this._valCleared = this._isSingle;

        _get(_getPrototypeOf(ZDropdownList.prototype), "deselect", this).apply(this, arguments);
      }
    }, {
      key: "deselectAll",
      value: function deselectAll() {
        this._valCleared = this._isSingle;

        _get(_getPrototypeOf(ZDropdownList.prototype), "deselectAll", this).apply(this, arguments);
      }
    }, {
      key: "search",
      value: function search(query) {
        var searchOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var open = arguments.length > 2 ? arguments[2] : undefined;

        if (open) {
          /* !forElement check added for offset given cases */
          searchOpts.shouldOpen = open ? !this._forElement || this._forElement.is(':visible') : undefined; // No I18N
        }

        _get(_getPrototypeOf(ZDropdownList.prototype), "search", this).call(this, query, searchOpts); // No I18N

      }
    }, {
      key: "_updateSearchFldPos",
      value: function _updateSearchFldPos(pos) {
        var shouldAdd;

        if (this.inputField && !this._opts.searchField && !this._data.title && !this._isBtns) {
          /* only if internal searchfield exists */
          shouldAdd = pos.indexOf('top') > -1;
        }

        this.container[shouldAdd ? 'addClass' : 'removeClass']('zdropdownlist--searchbottom'); // No I18N
      }
    }, {
      key: "_updatePos",
      value: function _updatePos(fromOpen, evObj) {
        var _this2 = this;

        var opts = this._opts,
            direction = opts.position,
            positionAlterable = opts.positionAlterable,
            showHideProps = _objectSpread({}, this._showHideProps, {
          event: evObj,
          mustBeShown: !fromOpen,

          /* If it is not set, element will be closed and opened again. */
          positionAlterable: positionAlterable,
          direction: direction
        });

        if (positionAlterable) {
          if (direction === 'auto') {
            // No I18N
            showHideProps.direction = direction = 'bottom-left'; // No I18N
            // Modified: positionAlterable can be different values - later when handled in showHideHandler - it can be removed.

            showHideProps.positionAlterable = showHideProps.positionAlterable || true;
          }

          showHideProps.callbacks = {
            beforeComputingDir: {
              dimensionModifier: function dimensionModifier(targetDim, elementDim, withinDim, options) {
                if (!_this2._maxHt) {
                  _this2._maxHt = elementDim.height;
                } else if (elementDim.height >= _this2._maxHt) {
                  _this2._maxHt = elementDim.height;
                } else {
                  options.positionAlterable = false;
                  options.direction = _this2._direction; // No I18N
                }
              }
            }
          };
        }

        var pos = this._callOpen(showHideProps).actualDirection;

        if (fromOpen) {
          this._direction = pos;

          this._updateSearchFldPos(pos);
        }
      }
    }, {
      key: "updatePosition",
      value: function updatePosition() {
        this._updatePos();
      }
    }, {
      key: "_fieldKeydownHandler",
      value: function _fieldKeydownHandler(evObj) {
        var code = evObj.keyCode;
        this._lastKeyCode = code;
        this._shiftPressed = evObj.shiftKey;

        if (this._isShown || this._showSearchField) {
          return _get(_getPrototypeOf(ZDropdownList.prototype), "_fieldKeydownHandler", this).apply(this, arguments);
        }

        var ZkeyCode = ZC.keyCode; // Opening list on UP and DOWN key press.

        if (code === ZkeyCode.UP || code === ZkeyCode.DOWN) {
          // It leads to movement of the cursor to the first and the last
          evObj.preventDefault();
          var query, minKeywordLength;
          var methodName = 'search'; //No I18N
          // Query is made empty to display all the items

          if (this._opts.searchFieldOptions.listAllItemsOnDOWNPress) {
            methodName = 'open'; //No I18N

            query = ''; // No I18N

            minKeywordLength = 0;
          } else {
            query = this.inputField.val();
          }

          var searchOptions = {
            event: evObj,
            minKeywordLength: minKeywordLength,
            updateField: false
          };

          if (methodName === 'open') {
            //No I18N
            searchOptions.searchQuery = query;
            this.open(searchOptions);
          } else {
            this.search(query, searchOptions, true);
          }
        }
      }
    }, {
      key: "_inputKeyupHandler",
      value: function _inputKeyupHandler(evObj) {
        var ZkeyCode = ZC.keyCode;
        var keyCode = evObj.keyCode;
        var inputFieldSettings = this._opts.searchFieldOptions;

        if (inputFieldSettings.suggestOnFieldFocus && keyCode === ZkeyCode.TAB && (keyCode !== this._lastKeyCode || this._shiftPressed !== evObj.shiftKey)) {
          this.searchWithDelay(undefined, {
            event: evObj,
            delay: 1
          });
        } else {
          _get(_getPrototypeOf(ZDropdownList.prototype), "_inputKeyupHandler", this).apply(this, arguments);
        }

        this._lastKeyCode = undefined;
        this._shiftPressed = false;
      }
    }, {
      key: "_bindInputFieldEvents",
      value: function _bindInputFieldEvents() {
        _get(_getPrototypeOf(ZDropdownList.prototype), "_bindInputFieldEvents", this).apply(this, arguments);

        if (this._opts.searchFieldOptions.handleEvents) {
          this._addEvents({
            inputMousedown: 'mousedown' // No I18N

          }, this.inputField);
        }
      }
    }, {
      key: "_checkCurPos",
      value: function _checkCurPos() {
        var inputField = this.inputField[0],
            searchFieldOptions = this._opts.searchFieldOptions;
        return (searchFieldOptions.filterBasedOnCurPos || searchFieldOptions.suggestOnFieldFocus) && inputField.selectionStart === inputField.selectionEnd;
      }
    }, {
      key: "_inputMousedownHandler",
      value: function _inputMousedownHandler(evObj) {
        var searchFieldOptions = this._opts.searchFieldOptions;
        this._filteredOnMouseDown = false;

        if (this._checkCurPos()) {
          this._filteredOnMouseDown = true;

          if (searchFieldOptions.filterBasedOnCurPos) {
            this._searchBasedOnCurPos(evObj);
          } else {
            this._search(undefined, {
              event: evObj
            });
          }
        }
      }
    }, {
      key: "_inputMouseupHandler",
      value: function _inputMouseupHandler(evObj) {
        var inputField = this.inputField[0];

        if (!this._filteredOnMouseDown && inputField.selectionStart === inputField.selectionEnd) {
          _get(_getPrototypeOf(ZDropdownList.prototype), "_inputMouseupHandler", this).call(this, evObj);
        }
      }
    }, {
      key: "_setAttribute",
      value: function _setAttribute(name, value) {
        var opts = this._opts,
            data = this._data,
            domChanged;
        this._userOptions[name] = value;
        opts[name] = value;

        if (name === 'forElement') {
          // No I18N
          this._storeForElement(value);
        } else if (['title', 'closeButton', 'closeIconClassName', 'closeSVGIconId'].indexOf(name) > -1) {
          // No I18N
          if (['title', 'closeButton'].indexOf(name) > -1) {
            // No I18N
            this._constructTitleBar();

            data.attrModified = name;
            domChanged = true; // No I18N
          } else if (opts.closeButton) {
            name = name === 'closeSVGIconId' ? 'SVGIconId' : 'iconClassName'; // No I18N

            this._setBtnValue(_defineProperty({}, name, value), data.close);
          }
        } else if (['clearButton', 'doneButton', 'resetButton', 'commandBar', 'resetButtonLabel', 'clearButtonLabel', 'doneButtonLabel'].indexOf(name) > -1) {
          // No I18N
          this._handleBtnAttrs(name, value);

          domChanged = name.indexOf('Label') < 0;
        } else if (name === 'displayType') {
          // No I18N
          data.attrModified = "displayType"; // No I18N

          this._validateOpts();

          if (value === 'box') {
            this._pointer = undefined;
          }

          domChanged = true;
        } else {
          if (['selectOnKeyNavigation', 'focusItemOnItemMouseover', 'multiple'].indexOf(name) > -1) {
            // No I18N
            if (name === 'multiple' && value) {
              this._prevSelectedItem = this._prevSelectedItemData = this._curSelectedItem = this._curSelectedItemData = null;
            }

            this._validateOpts();
          }

          _get(_getPrototypeOf(ZDropdownList.prototype), "_setAttribute", this).apply(this, arguments);

          domChanged = this._domChanged;

          if (name === 'value' && this._isSingle) {
            // No I18N
            if (value) {
              data.attrModified = 'value'; // No I18N
            } else {
              this._valCleared = true;
            }
          }
        }

        if (['position', 'positionAlterable', 'offset', 'animation', 'margin', 'height', 'width', 'minWidth', 'viewport', 'appendTo', 'rtl'].indexOf(name) > -1) {
          // No I18N
          this._setShowHideOpts();
        }

        if (this._reInit) {
          this._shouldReSearch = true;
        }

        this._domChanged = domChanged;
      }
    }, {
      key: "_constructBtns",
      value: function _constructBtns() {
        var _this3 = this;

        var cBar = this._data.cBar = {},
            commandBar = this._opts.commandBar || this._defaultCBar;
        this._isBtns = !!commandBar;
        this._btnsArr = [];

        this._emptyBtnData();

        var _loop = function _loop(col) {
          var colArr = commandBar[col],
              align = col.replace('Column', ''); // No I18N

          cBar[align] = [];
          cBar[align + 'Class'] = _this3.CLASSES[col];
          colArr.forEach(function (btn, index) {
            _this3._btnsArr.push(btn);

            var btnName = '_' + btn + 'Btn'; // No I18N

            _this3[btnName] = true;
            _this3[btnName + 'Data'] = cBar[align][index] = _this3._getBtnAttr(btn); // No I18N
          });
        };

        for (var col in commandBar) {
          _loop(col);
        }

        this._data.cBar = this._btnsArr.length ? cBar : null;
      }
    }, {
      key: "_emptyBtnData",
      value: function _emptyBtnData() {
        var _this4 = this;

        ['done', 'reset', 'clear'].forEach(function (btn) {
          // No I18N
          var btnName = '_' + btn + 'Btn'; // No I18N

          _this4[btnName] = _this4[btnName + 'Data'] = undefined;
        });
      }
    }, {
      key: "_setDefaultCBar",
      value: function _setDefaultCBar() {
        var cBar = null,
            opts = this._opts,
            defaultCBar = {
          done: 'rightColumn',
          // No I18N
          reset: 'rightColumn',
          // No I18N
          clear: 'leftColumn' // No I18N

        },
            btnArr = ['clear', 'reset', 'done']; // No I18N

        btnArr.forEach(function (btn) {
          if (opts[btn + 'Button']) {
            // No I18N
            if (!cBar) {
              cBar = {};
            }

            var col = defaultCBar[btn];
            cBar[col] = cBar[col] || [];
            cBar[col].push(btn);
          }
        });
        this._defaultCBar = cBar;
      }
    }, {
      key: "_getBtnAttr",
      value: function _getBtnAttr(btn) {
        var label = btn + 'ButtonLabel',
            // No I18N
        isReset = btn === 'reset'; // No I18N

        label = this._opts[btn + 'ButtonLabel'] || this._getI18NText(label); // No I18N

        return ZC.ZButton.getBtnProps({
          customAttributes: {
            name: btn,
            'aria-label': label // No I18N

          },
          name: btn,
          tabindex: 0,
          className: btn + '-' + this.name + (isReset ? ' zdropdownlist__textbutton' : ''),
          // No I18N
          text: label,
          // No I18N
          appearance: btn === 'done' ? 'primary' : 'normal',
          // No I18N
          size: 'small',
          // No I18N
          isCE: this.isCE,
          templateRender: true
        });
      }
    }, {
      key: "_updateBtns",
      value: function _updateBtns() {
        var _this5 = this;

        var btns = this._btnsArr || []; // No I18N

        btns.forEach(function (btn) {
          var btnData = _this5['_' + btn + 'BtnData']; // No I18N

          if (btnData) {
            var _this5$_addEvents;

            var elem = btnData.mainElement = _this5.container.find('.' + btn + '-' + _this5.name);

            _this5._addEvents((_this5$_addEvents = {}, _defineProperty(_this5$_addEvents, btn + 'Click', 'mousedown keydown'), _defineProperty(_this5$_addEvents, "btnFocusIn", 'focusin'), _this5$_addEvents), elem);

            _this5._handleFocus(elem);
          }
        });
      }
    }, {
      key: "_btnFocusInHandler",
      value: function _btnFocusInHandler(evObj) {
        if ($(evObj.target).hasClass('has-mfocus')) {
          // No I18N
          this._focusInHandler(evObj);
        }
      }
    }, {
      key: "_doneClickHandler",
      value: function _doneClickHandler(evObj) {
        if (evObj.type === 'mousedown' || this._isKeyDown(evObj)) {
          this._doneClicked = true;
          this._btnClicked = 'done'; // No I18N

          if (this._isSingle) {
            this._savePrevSelection();
          }

          if (this._valueChanged) {
            this._trigger('change', evObj); // No I18N

          }

          this.close(evObj);
          this._doneClicked = false;

          this._trigger('done', evObj); // No I18N


          this._btnClicked = undefined;
        }
      }
    }, {
      key: "_resetClickHandler",
      value: function _resetClickHandler(evObj, forceReset) {
        var elem = this._resetBtnData && this._resetBtnData.mainElement;
        elem = $(elem);

        if (forceReset || evObj && elem.length && !$(evObj.target).closest(elem).hasClass('is-disabled') && (evObj.type === 'mousedown' || this._isKeyDown(evObj))) {
          /* Since anchor tags can't be disabled */
          if (this._valueChanged) {
            this._setInternalChange();

            this._setValues(this._prevSelectedItems, {
              event: evObj,
              clearOtherValues: true
            });

            !this._doneBtn && _get(_getPrototypeOf(ZDropdownList.prototype), "_trigger", this).call(this, 'change', evObj); // No I18N
          }

          evObj && this._trigger('reset', evObj); // No I18N

          if (elem.length) {
            this._updateBtnState(true, 'reset'); // No I18N


            this._btnClicked = 'reset'; // No I18N
          }

          this._internalChange = false;

          if (evObj && evObj.type === 'mousedown') {
            this._btnClicked = undefined;
          }
        }
      }
    }, {
      key: "_clearClickHandler",
      value: function _clearClickHandler(evObj) {
        if (evObj.type === 'mousedown' || this._isKeyDown(evObj)) {
          this._btnClicked = 'clear'; // No I18N

          this._setInternalChange();

          this._valueChanged = true;
          this.deselectAll(evObj);

          this._updateBtnState(true, 'clear'); // No I18N


          this._trigger('clear', evObj); // No I18N
          // !this._doneBtn && super._trigger('change', evObj); // No I18N


          this._internalChange = false;

          if (evObj.type === 'mousedown') {
            this._btnClicked = undefined;
          }
        }
      }
    }, {
      key: "_setInternalChange",
      value: function _setInternalChange() {
        if (this._doneBtn) {
          this._internalChange = true;
        }
      }
    }, {
      key: "_isKeyDown",
      value: function _isKeyDown(evObj) {
        var keyCode = ZC.keyCode;

        if (evObj.type === 'keydown') {
          // No I18N
          if ([keyCode.UP, keyCode.DOWN].indexOf(evObj.keyCode) > -1) {
            this._isItemsNavigation = true;
            this.setFocus(evObj);
            this._isItemsNavigation = undefined;
          }

          return [keyCode.ENTER, keyCode.SPACE].indexOf(evObj.keyCode) > -1;
        }
      }
    }, {
      key: "_disableOrEnableBtns",
      value: function _disableOrEnableBtns(disable) {
        this._doneBtn && this._updateBtnState(disable, 'done'); // No I18N

        this._resetBtn && this._updateBtnState(disable, 'reset'); // No I18N
      }
    }, {
      key: "_updateBtnState",
      value: function _updateBtnState(disable, btn) {
        btn = '_' + btn + 'Btn'; // No I18N

        var disableCls = ' is-disabled',
            // No I18N
        btnData = this[btn + 'Data'],
            // No I18N
        clsName = btnData.className;

        if (disable) {
          clsName = clsName.indexOf(disableCls) > 0 ? clsName : clsName + disableCls;
        } else {
          clsName = clsName.replace(disableCls, '');
        }

        this._disable(disable, btnData.mainElement);

        btnData.className = clsName;
      }
    }, {
      key: "_handleBtnsOnOpen",
      value: function _handleBtnsOnOpen() {
        var selecteditems = this._selectedItems;

        if (this._clearBtn) {
          this._updateBtnState(!selecteditems.length, 'clear'); // No I18N

        }

        var prevValues = this._selectedItems.slice();
        /* To duplicate the array without reference */


        this._prevSelectedItems = prevValues.map(function (value) {
          return value.originalData;
        });

        this._disableOrEnableBtns(true);
      }
    }, {
      key: "_updateBtnsOnItemSelect",
      value: function _updateBtnsOnItemSelect() {
        this._disableOrEnableBtns();
        /* To avoid triggering change on done click when no change is happened */


        this._valueChanged = true;
        this._clearBtn && this._updateBtnState(!this._selectedItems.length, 'clear'); // No I18N
      }
    }, {
      key: "_handleBtnAttrs",
      value: function _handleBtnAttrs(name, value) {
        if (name.indexOf('Label') > -1) {
          // No I18N
          this._setBtnValue({
            text: value
          }, this['_' + name.replace('ButtonLabel', '') + 'BtnData']); // No I18N

        } else {
          /* Modified Attr is not used since if setAttributes called, different value will be assigned to it and events will not be bind to buttons */
          this._btnAttrChanged = true; // No I18N

          this._validateOpts();

          this._constructBtns();
        }
      }
    }, {
      key: "_resetFocus",
      value: function _resetFocus(btn, evObj) {
        /* To remove the classes added by _handleFocus() in zgeneral-main. */
        this['_' + btn + 'BtnData'].mainElement.removeClass('has-focus has-mfocus has-kfocus'); // No I18N

        this.setFocus(evObj);
        this._btnClicked = undefined;
      }
    }, {
      key: "_getCloseProps",
      value: function _getCloseProps() {
        var opts = this._opts;
        return this._data.close || ZC._getIconInfo(opts.closeIconClassName, opts.closeSVGIconId, '#zc__svg--close', 'zdropdownlist__closeicon'); // No I18N
      }
    }, {
      key: "_updateCloseEle",
      value: function _updateCloseEle() {
        var close = this._data.close.mainElement = this.container.find('.zdropdownlist__closeiconcontainer')[0];
        close = $(close);
        close.attr({
          tabindex: 0,
          role: 'button',
          // No I18N
          title: this._getI18NText('closeButtonLabel') // No I18N

        });

        this._addEvents({
          closeClick: 'click' // No I18N

        }, close);
      }
    }, {
      key: "_closeClickHandler",
      value: function _closeClickHandler(evObj) {
        this.close(evObj);
      }
    }, {
      key: "_animateOpenOrClose",
      value: function _animateOpenOrClose(ele, opts) {
        var animation = this._opts.animation;

        if (!opts.mustBeShown) {
          var isShown = this._isShown,
              animate = isShown ? animation.close : animation.open;

          if (!animate.name && !isShown) {
            /* For close, hiding will be done in closeHandler */
            this._display(false, this.container);
          }

          ZC.animationHandler({
            action: isShown ? 'close' : 'open',
            // No I18N
            animation: animation,
            element: this.container,
            ctype: this.name,
            callback: isShown ? this._closeHandler.bind(this) : this._openHandler.bind(this)
          });
        }
      }
    }, {
      key: "name",
      get: function get() {
        return "zdropdownlist";
      }
    }, {
      key: "attrs",
      get: function get() {
        return {
          position: 'auto',
          // No I18N
          selectOnTabPress: false,
          forElement: null,
          viewport: null,
          displayType: 'box',
          // No I18N
          focusFirstItemOnOpen: false,
          focusSelectedItemOnOpen: true,
          title: '',
          closeButton: false,
          closeIconClassName: '',
          closeSVGIconId: '',
          positionAlterable: false,
          doneButton: false,
          clearButton: false,
          resetButton: false,
          doneButtonLabel: null,
          clearButtonLabel: null,
          resetButtonLabel: null,
          handleFocusNavigation: null,

          /* ListBox API whose default value have been modified */
          selectOnKeyNavigation: null,
          focusItemOnItemMouseover: null,

          /* Options that are added to support other components */
          minWidth: null,
          // For Listbox
          focusSelectedItem: false
        };
      }
    }, {
      key: "propType",
      get: function get() {
        var boolType = 'boolean'; // No I18N

        return {
          selectOnKeyNavigation: boolType,
          focusItemOnItemMouseover: boolType
        };
      }
    }, {
      key: "props",
      get: function get() {
        return {
          appendTo: null,
          offset: null,
          animation: {},
          margin: {},
          commandBar: null,
          messages: {
            doneButtonLabel: 'Done',
            // No I18N
            resetButtonLabel: 'Reset',
            // No I18N
            clearButtonLabel: 'Clear',
            // No I18N
            closeButtonLabel: 'Close' // No I18N

          },
          search: {
            showNoResultsMessage: true,
            criteria: 'startswith' // No I18N

          },
          searchFieldOptions: {
            updateOnSelect: false,
            autoComplete: false,
            listAllItemsOnDOWNPress: false,
            suggestOnFieldFocus: false,
            filterBasedOnCurPos: false
          }
        };
      }
    }, {
      key: "EVENTS",
      get: function get() {
        return ['beforeopen', // No I18N
        'open', // No I18N
        'beforefocus', // No I18N
        'beforeclose', // No I18N
        'close', // No I18N
        'update', // No I18N
        'beforeupdate', // No I18N
        'done', // No I18N
        'reset', // No I18N
        'clear' // No I18N
        ];
      }
    }, {
      key: "CLASSES",
      get: function get() {
        return {
          container: 'zdropdownlist',
          // No I18N

          /* Properties */
          icon: 'zdropdownlist--withicon',
          // No I18N
          listwithloader: 'zdropdownlist--loading',
          // No I18N
          withicon: 'zdropdownlist--withicon',
          // No I18N
          withhint: 'zdropdownlist--withdesc',
          // No I18N
          withcheckbox: 'zdropdownlist--withcheckbox',
          // No I18N
          withcheckedicon: 'zdropdownlist--withcheckedindication',
          // No I18N
          withoutcheckeditem: 'zdropdownlist--withoutcheckeditem',
          // No I18N
          listwithcustom: 'zdropdownlist--withcustomitem',
          // No I18N
          withsearchfield: 'zdropdownlist--withsearchfield',
          // No I18N
          icononly: 'zdropdownlist--icononly',
          // No I18N
          icontext: 'zdropdownlist--iconwithtext',
          // No I18N
          listwithcheckboxRight: 'zdropdownlist--checkboxright',
          // No I18N
          listwithcheckediconRight: 'zdropdownlist--checkedindicationright',
          // No I18N
          listwithactionbtnsvisible: ' zdropdownlist--actionbuttonvisible',
          // No I18N
          listwithimage: 'zdropdownlist--withimage',
          // No I18N
          reorderable: 'zdropdownlist--reorderable',
          // No I18N

          /* Dropdown list properties */
          text: 'zdropdownlist__text',
          // No I18N
          title: 'zdropdownlist__title',
          // No I18N
          hint: 'zdropdownlist__description',
          // No I18N
          body: 'zdropdownlist__body',
          // No I18N
          header: 'zdropdownlist__header',
          // No I18N
          footer: 'zdropdownlist__footer',
          // No I18N
          item: 'zdropdownlist__item',
          // No I18N
          itemgroup: 'zdropdownlist__itemgroup',
          // No I18N
          itemgrouplabel: 'zdropdownlist__grouplabel',
          // No I18N
          loader: 'zdropdownlist__loader',
          // No I18N
          fullloader: 'zdropdownlist__fullloader',
          // No I18N
          loadericon: 'zdropdownlist__loadericon',
          // No I18N
          actionbuttonsWrapper: 'zdropdownlist__actions',
          // No I18N
          actionbutton: 'zdropdownlist__action',
          // No I18N
          separator: 'zdropdownlist__separator',
          // No I18N
          checkediconWrapper: 'zdropdownlist__checkedindication',
          // No I18N
          checkedicon: 'zdropdownlist__checkedicon',
          // No I18N
          checkboxWrapper: 'zdropdownlist__checkbox',
          // No I18N
          checkbox: 'zdropdownlist__inputcheckbox',
          // No I18N
          checkboxlabel: 'zdropdownlist__checkboxlabel',
          // No I18N
          avatar: 'zdropdownlist__avatar',
          // No I18N
          icondiv: 'zdropdownlist__image',
          // No I18N
          itemicon: 'zdropdownlist__icon',
          // No I18N
          content: 'zdropdownlist__content',
          // No I18N
          textIconWrapper: 'zdropdownlist__imagetext',
          // No I18N
          moreresults: 'zdropdownlist__moreresults',
          // No I18N
          noresults: 'zdropdownlist__noresults',
          // No I18N
          noresultstext: 'zdropdownlist__noresultstext',
          // No I18N
          search: 'zdropdownlist__search',
          // No I18N
          searchcontainer: 'zdropdownlist__searchiconcontainer',
          // No I18N
          searchicon: 'zdropdownlist__searchicon',
          // No I18N
          searchfield: 'zdropdownlist__searchfield',
          // No I18N
          clearbuttonicon: 'zdropdownlist__clearicon',
          // No I18N
          clearbutton: 'zdropdownlist__clearbutton',
          // No I18N
          listwithicononly: 'zdropdownlist--icononly',
          // No I18N

          /* States */
          hoverable: 'is-hoverable',
          // No I18N
          disabled: 'is-disabled',
          // No I18N
          hover: 'on-hover',
          // No I18N
          focussed: 'has-focus',
          // No I18N
          selected: 'is-selected',
          // No I18N
          rtl: 'zh-rtl',
          // No I18N
          leftColumn: 'zdropdownlist__commandbaractionsleft',
          // No I18N
          rightColumn: 'zdropdownlist__commandbaractionsright',
          // No I18N
          centerColumn: 'zdropdownlist__commandbaractionscenter' // No I18N

        };
      }
    }, {
      key: "SELECTORS",
      get: function get() {
        return {
          OPTION: this.isCE ? 'z-dropdownlistitem' : 'option',
          // No I18N
          OPTGROUP: this.isCE ? 'z-dropdownlistgroup' : 'optgroup',
          // No I18N
          OPTIONSBODY: 'z-dropdownlistbody',
          // No I18N
          OPTIONSHEADER: 'z-dropdownlistheader',
          // No I18N
          OPTIONSFOOTER: 'z-dropdownlistfooter',
          // No I18N
          OPTIONSEPARATOR: 'z-dropdownlistseparator' // No I18N

        };
      }
    }]);

    return ZDropdownList;
  }(ZC.ZListBox);

  ZC.registerComponent('ZDropdownList', ZC.ZListBox, ZDropdownList);
})(ZComponents, ZComponents.DOMUtil);