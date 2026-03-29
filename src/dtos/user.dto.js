export const toRegisterDTO = (body) => {
    const name = body?.name?.trim();
    const email = body?.email?.trim()?.toLowerCase();
    const password = body?.password;

    return { name, email, password };
};

export const toLoginDTO = (body) => {
    const email = body?.email?.trim()?.toLowerCase();
    const password = body?.password;

    return { email, password };
};
