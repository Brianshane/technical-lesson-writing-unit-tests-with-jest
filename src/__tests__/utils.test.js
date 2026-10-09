// Your tests here
import{pointsforword} from '../utils';
decribe('pointsforword',()=>{
    it('it calculates poits for given words in that vowels is 1 point and consonants is 2 points',()=>{
        //define value
        const word="test";
        //pass test valu argument to pointsfor word function
        pointsforword(word);
        //checks the return value  ==7
        expect(points).toBe(7);
    });
});