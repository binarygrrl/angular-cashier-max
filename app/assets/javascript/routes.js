angular.module('CashierMax').config(function($routeProvider){
	 $routeProvider
	 .when('/', {
	 	redirectTo: '/home'
	 })
	 .when('/notes', {
	 	templateUrl: "assets/templates/notes/index.html",
	 	controller: "NotesIndexController"
	 })
	 .when('/notes/new', {
	 	templateUrl: "assets/templates/notes/new.html",
	 	controller: "NotesCreateController"
	 })
	 //Put most specific routes at the bottom - new will match id if id is above new
	 .when('/notes/:id', {
	 	templateUrl: "assets/templates/notes/show.html",
	 	controller: "NotesShowController"
	 })
	 .when('/notes/:id/edit', {
	 	templateUrl: "assets/templates/notes/edit.html",
	 	controller: "NotesEditController"
	 })
	 .when('/users', {
	 	templateUrl: "assets/templates/users/index.html",
	 	controller: "UsersIndexController"
	 })
	 .when('/users/:id', {
	 	templateUrl: "assets/templates/users/show.html",
	 	controller: "UsersShowController"
	 })
	 .when('/home', {
	 	templateUrl: "assets/templates/home/index.html",
	 	controller: "HomeIndexController"
	 })
	 .when('/buy', {
	 	templateUrl: "assets/templates/buy/index.html",
	 	controller: "BuyIndexController"
	 })
	 .when('/redeem', {
	 	templateUrl: "assets/templates/redeem/index.html",
	 	controller: "RedeemIndexController"
	 })
	 .when('/instant', {
	 	templateUrl: "assets/templates/instant/index.html",
	 	controller: "InstantIndexController"
	 })
	 .when('/timeCard', {
	 	templateUrl: "assets/templates/timeCard/index.html",
	 	controller: "TimeCardIndexController"
	 })
	 .when('/drawer', {
	 	templateUrl: "assets/templates/drawer/index.html",
	 	controller: "DrawerIndexController"
	 })
	 .when('/customers', {
	 	templateUrl: "assets/templates/customers/index.html",
	 	controller: "CustomersIndexController"
	 })
	 .when('/facility', {
	 	templateUrl: "assets/templates/facility/index.html",
	 	controller: "FacilityIndexController"
	 })
	 .when('/reports', {
	 	templateUrl: "assets/templates/reports/index.html",
	 	controller: "ReportsIndexController"
	 })
	 .when('/employees', {
	 	templateUrl: "assets/templates/employees/index.html",
	 	controller: "EmployeesIndexController"
	 })
	 .when('/products', {
	 	templateUrl: "assets/templates/products/index.html",
	 	controller: "ProductsIndexController"
	 })
	 .when('/logout', {
	 	templateUrl: "assets/templates/logout/index.html",
	 	controller: "LogoutIndexController"
	 })
	 .when('/admin', {
	 	templateUrl: "assets/templates/admin/index.html",
	 	controller: "AdminIndexController"
	 })
	 .when('/audit', {
	 	templateUrl: "assets/templates/audit/index.html",
	 	controller: "AuditIndexController"
	 })
	 //Customer Menu Options
	 .when('/custMenu/index', {
	 	templateUrl: "assets/templates/custMenu/index.html",
	 	controller: "CustomerMenuIndexController"
	 })
	 .when('/custMenu/accountDetails', {
	 	templateUrl: "assets/templates/custMenu/accountDetails.html",
	 	controller: "CustomerMenuAccountDetailsController"
	 })
	 .when('/custMenu/changeInfo', {
	 	templateUrl: "assets/templates/custMenu/changeInfo.html",
	 	controller: "CustomerMenuChangeInfoController"
	 })
	 .when('/custMenu/transactions', {
	 	templateUrl: "assets/templates/custMenu/transactions.html",
	 	controller: "CustomerMenuTransactionsController"
	 })
	 .when('/custMenu/limits', {
	 	templateUrl: "assets/templates/custMenu/limits.html",
	 	controller: "CustomerMenuLimitsController"
	 })
	 .when('/custMenu/support', {
	 	templateUrl: "assets/templates/custMenu/support.html",
	 	controller: "CustomerMenuSupportController"
	 })
	 .when('/custMenu/exclusionStatus', {
	 	templateUrl: "assets/templates/custMenu/exclusionStatus.html",
	 	controller: "CustomerMenuExclusionStatusController"
	 })
	 .when('/custMenu/redeemVouchers', {
	 	templateUrl: "assets/templates/custMenu/redeemVouchers.html",
	 	controller: "CustomerMenuRedeemVouchersController"
	 })
	 .when('/custMenu/ticketReplays', {
	 	templateUrl: "assets/templates/custMenu/ticketReplays.html",
	 	controller: "CustomerMenuTicketReplaysController"
	 })
	 .when('/custMenu', {
	 	templateUrl: "assets/templates/custMenu/index.html",
	 	controller: "CustomerMenuIndexController"
	 })
});