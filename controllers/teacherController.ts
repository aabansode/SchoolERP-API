import Teacher from '../models/teacher.model';
import BaseController from './baseController';

export default class TeacherController extends BaseController {
    model = Teacher;

    //getTeachers
    getTeachers = (req, res) => {

        console.log("[TeacherController] :: data: " + JSON.stringify(req.body) );

        var query = req.body;

        this.model.find(query)
        .populate('user')
        .exec((err, obj) => {
            if (err) { return console.error(err); }
            res.json({
                'success': true,
                'data': obj
            });
        });

    } // getTeachers

    //getTotalTeachers
    getTotalTeachers = (req, res) => {

        console.log("[TeacherController] :: data: " + JSON.stringify(req.body) );

        this.model.count({}, function( err, count){
         console.log( "Number of Teachers:", count );
         res.json({
                'success': true,
                'totalteachers': count
            });
        });

    } // getTotalTeachers
}
