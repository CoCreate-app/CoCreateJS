function getCommonParams() 
{
  return {
    "apiKey":           config.apiKey,
    "securityKey":      config.securityKey,
    "organization_id":  config.organization_Id,
  }
}

function getCommonParamsExtend(info) 
{
  return {
    "apiKey":           info.apiKey || config.apiKey,
    "securityKey":      info.securityKey || config.securityKey,
    "organization_id":  info.organization_id || config.organization_Id,
  }
}

function generateSocketClient (namespace, room) 
{
  let ns = namespace || config.organization_Id
  let rr = room || '';
  if (rr) {
    return `${ns}/${rr}`
  } else {
    return ns;
  }
}

export {getCommonParams, getCommonParamsExtend, generateSocketClient};