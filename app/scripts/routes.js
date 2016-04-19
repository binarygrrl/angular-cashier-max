angular.module('CashierMax').config(function($routeProvider){
	 $routeProvider
	 .when('/', {
	 	redirectTo: '/home'
	 })
	 .when('/notes', {
	 	templateUrl: "views/notes/index.html",
	 	controller: "NotesIndexController"
	 })
	 .when('/notes/new', {
	 	templateUrl: "views/notes/new.html",
	 	controller: "NotesCreateController"
	 })
	 //Put most specific routes at the bottom - new will match id if id is above new
	 .when('/notes/:id', {
	 	templateUrl: "views/notes/show.html",
	 	controller: "NotesShowController"
	 })
	 .when('/notes/:id/edit', {
	 	templateUrl: "views/notes/edit.html",
	 	controller: "NotesEditController"
	 })
	 .when('/users', {
	 	templateUrl: "views/users/index.html",
	 	controller: "UsersIndexController"
	 })
	 .when('/users/:id', {
	 	templateUrl: "views/users/show.html",
	 	controller: "UsersShowController"
	 })
	 .when('/home', {
	 	templateUrl: "views/home/index.html",
	 	controller: "HomeIndexController"
	 })
	 .when('/buy', {
	 	templateUrl: "views/buy/index.html",
	 	controller: "BuyIndexController"
	 })
	 .when('/redeem', {
	 	templateUrl: "views/redeem/index.html",
	 	controller: "RedeemIndexController"
	 })
	 .when('/instant', {
	 	templateUrl: "views/instant/index.html",
	 	controller: "InstantIndexController"
	 })
	 .when('/timeCard', {
	 	templateUrl: "views/timeCard/index.html",
	 	controller: "TimeCardIndexController"
	 })
	 .when('/drawer', {
	 	templateUrl: "views/drawer/index.html",
	 	controller: "DrawerIndexController"
	 })
	 .when('/customers', {
	 	templateUrl: "views/customers/index.html",
	 	controller: "CustomersIndexController"
	 })
	 .when('/facility', {
	 	templateUrl: "views/facility/index.html",
	 	controller: "FacilityIndexController"
	 })
	 .when('/reports', {
	 	templateUrl: "views/reports/index.html",
	 	controller: "ReportsIndexController"
	 })
	 .when('/employees', {
	 	templateUrl: "views/employees/index.html",
	 	controller: "EmployeesIndexController"
	 })
	 .when('/products', {
	 	templateUrl: "views/products/index.html",
	 	controller: "ProductsIndexController"
	 })
	 .when('/logout', {
	 	templateUrl: "views/logout/index.html",
	 	controller: "LogoutIndexController"
	 })
	 .when('/admin', {
	 	templateUrl: "views/admin/index.html",
	 	controller: "AdminIndexController"
	 })
	 .when('/audit', {
	 	templateUrl: "views/audit/index.html",
	 	controller: "AuditIndexController"
	 })
	 //Customer Menu Options
	 .when('/custMenu/index', {
	 	templateUrl: "views/custMenu/index.html",
	 	controller: "CustomerMenuIndexController"
	 })
	 .when('/custMenu/accountDetails', {
	 	templateUrl: "views/custMenu/accountDetails.html",
	 	controller: "CustomerMenuAccountDetailsController"
	 })
	 .when('/custMenu/changeInfo', {
	 	templateUrl: "views/custMenu/changeInfo.html",
	 	controller: "CustomerMenuChangeInfoController"
	 })
	 .when('/custMenu/transactions', {
	 	templateUrl: "views/custMenu/transactions.html",
	 	controller: "CustomerMenuTransactionsController"
	 })
	 .when('/custMenu/limits', {
	 	templateUrl: "views/custMenu/limits.html",
	 	controller: "CustomerMenuLimitsController"
	 })
	 .when('/custMenu/support', {
	 	templateUrl: "views/custMenu/support.html",
	 	controller: "CustomerMenuSupportController"
	 })
	 .when('/custMenu/exclusionStatus', {
	 	templateUrl: "views/custMenu/exclusionStatus.html",
	 	controller: "CustomerMenuExclusionStatusController"
	 })
	 .when('/custMenu/redeemVouchers', {
	 	templateUrl: "views/custMenu/redeemVouchers.html",
	 	controller: "CustomerMenuRedeemVouchersController"
	 })
	 .when('/custMenu/ticketReplays', {
	 	templateUrl: "views/custMenu/ticketReplays.html",
	 	controller: "CustomerMenuTicketReplaysController"
	 })
	 .when('/custMenu', {
	 	templateUrl: "views/custMenu/index.html",
	 	controller: "CustomerMenuIndexController"
	 })
});