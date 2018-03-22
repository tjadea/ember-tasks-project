import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addTask: function() {
            let title = this.get('title');
            let date = this.get('date');
            let description = this.get('description');
            
            // Create New Task
            let newTask = this.store.createRecord('task', {
                title: title,
                date: new Date(date),
                description: description
            });
        //save to Database
        newTask.save();

        //clear Form
        this.setProperties({
            title: '',
            date: '',
            description: ''
        })
        }
    }
});
