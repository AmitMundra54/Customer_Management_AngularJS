"use strict";
function userInfo(){
    return {
        restrict : 'E',
        scope : {
            selecteduser: "=",
            closedialog: "&"
        },
        templateUrl : 'app/user/directives/user-info/userinfo.html',
        controller:function($scope){
            $scope.customer = {
                name:"Amit Mundra",
                batch:"2014-2017",
                department:"Marketing",
                dateOfBirth:"04/01/1995",
                gender:"Male",
                fatherName:"Tarachand Mundra",
                motherName:"Parvati Mundra",
                income:40000.00,
                religion:"Hindu",
                community:"Backward Community",
                caste:"Mundra",
                nationality:"INDIAN",
                motherTongue:"Hindi",
                placeOfBirth:"Chittorgarh",
                financialCategory:"self",
                admissionType:"Regular",
                admissionCategory:"Government Quota",
                primaryAddress:{
                    addressLine1:"abc",
                    addressLine2:"place",
                    addressLine3:"city"
                },
                secondaryAddress:{
                    addressLine1:"xyz",
                    addressLine2:"place",
                    addressLine3:"city"
                },
                medicalInformation:{
                    height:170,
                    weight:58.00,
                    bloodGroup:"O+",
                    physicallyChallenged:"YES",
                    eyeColour:"Brown",
                    eyeSight:"Normal",
                    identification:{
                        mole:"On left hand wrist",
                        scar:"On left leg ankle"
                    }
                },
            }

        }
    }
}

module.exports = userInfo;