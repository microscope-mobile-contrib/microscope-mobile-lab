'use strict';

var _$sce;

// HomeCtrl class
function HomeCtrl ($sce, $scope) {
	_$sce = $sce;
	
	this.source = '';
	this.iframe = {
		url: 'http://localhost:8100/'
	};
	
	this.getSource();
}

HomeCtrl.prototype.getSource = function () {
	this.source = _$sce.trustAsResourceUrl(this.iframe.url);
};

module.exports = HomeCtrl;