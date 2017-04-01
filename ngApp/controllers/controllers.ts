namespace MyApp.Controllers {

    class HomeController {
        public file;

        public pickFile() {
            this.filepickerService.pick(
                { mimetype: 'image/*' },
                this.fileUploaded.bind(this)
            );
        }

        public fileUploaded(file) {
            // save file url to database
            this.file = file;
            this.$scope.$apply(); // force page to update
        }

        constructor(private filepickerService, private $scope: ng.IScope) { }
    }

    angular.module('MyApp').controller('HomeController', HomeController);
}
