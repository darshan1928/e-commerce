const userSignInController = async (req, res) => {
    try {
    } catch (error) {
      res.json({
        message: error,
        error: true,
        success: false,
      });
    }
  };
  
  export default userSignInController;
  