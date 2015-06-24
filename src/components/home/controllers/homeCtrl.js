'use strict';

var _$sce;

// HomeCtrl class
function HomeCtrl($sce, $scope) {
	_$sce = $sce;

	this.source = '';
	this.iframe = {
		url: 'http://codepen.io/tomadj/full/ZGaKor/'
	};


	this.getSource();

	this.devices = [
		{
			name: 'iphone',
			deviceClass: 'device-iphone',
			iframeClass: 'iframe-iphone',
			img: 'iphone.png'
		},
		{
			name: 'ipad',
			deviceClass: 'device-ipad',
			iframeClass: 'iframe-ipad',
			img: 'ipad.png'
		}];

	this.selectedDevice = this.devices[0];

}

HomeCtrl.prototype.getSource = function () {
	this.source = _$sce.trustAsResourceUrl(this.iframe.url);
};

module.exports = HomeCtrl;