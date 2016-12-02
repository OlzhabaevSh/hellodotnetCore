declare var angular: any;

export interface IPerson {
    id: number;
    name: string;
}

export class MyComponentController {

    persons: IPerson[];

    $onInit(){
        this.persons = new Array();

        this.persons.push({id: 1, name: 'person 1'}, 
        {id: 2, name: 'person 2'}, 
        {id: 3, name: 'person 3'});
    }

}

export let myComponent = {
    controller: MyComponentController,
    templateUrl: '/js/myComponent.html'
};

