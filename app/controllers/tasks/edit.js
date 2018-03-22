import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        editTask: function(id) {
            let self = this;
            let title = this.get('model.title');
            let date = this.get('model.date');
            let description = this.get('model.description');
            
            // Edit Task
           this.store.findRecord('task', id).then(function(task) {
               task.set('title', title);
               task.set('date', new Date(date));
               task.set('description', description);

            //save to Database
            task.save();
           
            self.transitionToRoute('tasks');
            });
    }
}});
