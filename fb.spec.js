function Auth(authService){
    this.authService=authService
    this.signInWithFacebook=(phone,password)=>{
        
        return this.authService(phone,password)
    }
}
test('Mock with 1 should return 1',()=>{
    
    const mockFn=jest.fn(1)
        .mockReturnValue(1)
        expect(mockFn(1)).toBe(1)
        expect(mockFn).toBeCalledWith(1)
})
test('Signin with valid credential should be pass',()=>{
    const returnObject={
        name:'Weera',
        fackbookId:'1234',
        email:'w@gmail.com'
    }
    const mockFacebook=jest.fn("0812345678","abc1234")
        .mockReturnValue(returnObject)

    let app =new Auth(mockFacebook)
    let value =app.signInWithFacebook("0812345678","abc1234")

    expect(value).toEqual(returnObject)//ค่าเท่า
    expect(mockFacebook).toBeCalled()//fn ถูกเรียก
    expect(mockFacebook).toBeCalledWith("0812345678","abc1234")//test pamamiter
})