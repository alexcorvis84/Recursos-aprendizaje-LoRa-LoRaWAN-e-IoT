function decodeUplink(input) {
    return {
      data: {
        text: String.fromCharCode.apply(null, input.bytes)
      },
      warnings: [],
      errors: []
    };
  }