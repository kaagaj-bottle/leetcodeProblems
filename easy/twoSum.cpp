#include <iostream>
#include <vector>
using namespace std;


vector<int> twoSum(vector<int>& nums, int target) {
        int length=nums.size();

        vector<int> returnVec={0,1};

        bool isSolved=false;
        for(int i=0;i<length;++i){
            returnVec[0]=i;
            for(int j=i+1;j<length;++j){
                
                if(nums[i]+nums[j]==target){
                    returnVec[1]=j;
                    isSolved=true;
                    break;
                }else{
                   continue;
                }
            }
            if(isSolved){
                break;
            }
            
        }
    return returnVec;

    }

int main(){

    vector<int> v={3,2,3};
    int target=6;
    vector<int> answer=twoSum(v,target);
    cout<<"["<<answer[0]<<","<<answer[1]<<"]";
    std::cin.get();
    return 0;
}