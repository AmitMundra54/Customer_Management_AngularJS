function profileView(){
    return {
        restrict : 'E',
        scope : {

        },
        templateUrl : 'app/main-page/profile/profile.html',
        controller:function($scope){
            $scope.customer = {
                name:"Amit Mundra",
                batch:"2014-2017",
                department:"Marketing",
                rollNo:"15BCS2015",
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
                    addressLine1:"E,95 Housing Board",
                    addressLine2:"Gandhi Nagar",
                    addressLine3:"Chittorgarh"
                },
                secondaryAddress:{
                    addressLine1:"abc",
                    addressLine2:"Place",
                    addressLine3:"City"
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

module.exports = profileView;