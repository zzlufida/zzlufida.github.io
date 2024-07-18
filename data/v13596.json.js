window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13596","name":"V_InNotBalance_DGGZ","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create  view V_InNotBalance_DGGZ as\r\nSELECT \r\n\tcVouchType,v_VouchType.EnumName as cTypeName,\r\n  \tPU_T_VMIUsedVouch.ID,PU_T_VMIUsedVouch.cCode as cVouchID, PU_T_VMIUsedVouch.dDate as dVouchDate, \r\n\tN'' as cCoDwCode,\r\n\tPU_T_VMIUsedVouch.cCode as cCode,\r\n\tvendor.cVenCode as cDwCode,vendor.cVenName as cDwName,\r\n\tvendor.cVCCode as cDWCCode,\r\n\tvendor.cVenHeadCode as cHDWCode,\r\n\tvendor.cVenDepart as cHDptCode,\r\n\tvendor.cDCCode as cDWDCode,\r\n\tPU_T_VMIUsedVouch.cDepCode as cDeptCode,\r\n\tPU_T_VMIUsedVouch.cMemo as cDigest,\r\n\tPU_T_VMIUsedVouchs.cInvCode as cInvCode,inventory.cInvName,inventory.cInvCCode,\r\n\tPU_T_VMIUsedVouch.cPersonCode as cPerson, \r\n\tvendor.cVenPPerson as cHPsnCode,\r\n\tVendor.cVenAddress as cDwAddress,Vendor.cVenPostCode as cDwPostCode,Vendor.cVenEmail as cDwEmail,Vendor.cVenPerson as cDwPerson,Vendor.cVenPhone as cDwPhone,Vendor.cVenFax as cDwFax,\r\n       \tisnull(PU_T_VMIUsedVouchs.iConfirmQuantity,0) - isnull(PU_T_VMIUsedVouchs.iSQuantity,0) AS iAmount_s, \r\n\t(CASE WHEN ISNULL(PU_T_VMIUsedVouchs.iSQuantity,0)=0 THEN iOriSum ELSE (isnull(PU_T_VMIUsedVouchs.iConfirmQuantity,0) - isnull(PU_T_VMIUsedVouchs.iSQuantity,0)) * ISNULL(ioritaxcost,0) END) AS iAmount_f,\r\n        (CASE WHEN ISNULL(PU_T_VMIUsedVouchs.iSQuantity,0)=0 THEN iSum ELSE (isnull(PU_T_VMIUsedVouchs.iConfirmQuantity,0) - isnull(PU_T_VMIUsedVouchs.iSQuantity,0)) * iSum/iConfirmQuantity END) AS iAmount,\r\n\tPU_T_VMIUsedVouch.cexch_name as cExch_Name,PU_T_VMIUsedVouch.iExchRate as iExchRate,PU_T_VMIUsedVouchs.iACost as iPrice,vendor.iid as cAuthID,PU_T_VMIUsedVouchs.cItem_Class,fItem.citem_name as cItem_Name,PU_T_VMIUsedVouchs.cItemCode,PU_T_VMIUsedVouchs.cItemName as cItemName,\r\nN'' as cContractType,N'' as cContractTypeName,N'' as cContractID,N'' as cContractName  \r\nFROM PU_T_VMIUsedVouch left join vendor\r\n\ton PU_T_VMIUsedVouch.cVenCode=vendor.cVenCode inner join PU_T_VMIUsedVouchs on PU_T_VMIUsedVouch.id=PU_T_VMIUsedVouchs.id\r\n\tinner join inventory on PU_T_VMIUsedVouchs.cInvCode=inventory.cInvCode\r\n\tLEFT JOIN V_AA_Enum AS v_VouchType ON v_VouchType.EnumType=N'PU.VouchType' AND v_VouchType.EnumCode=N'代管挂账确认单'\r\n        LEFT JOIN fItem ON PU_T_VMIUsedVouchs.cItem_Class=fItem.cItem_Class\r\nwhere  abs(isnull(PU_T_VMIUsedVouchs.iConfirmQuantity,0))-abs(isnull(PU_T_VMIUsedVouchs.iSQuantity,0))>0 and PU_T_VMIUsedVouch.cbustype<>N'委外加工'\r\nAnd (PU_T_VMIUsedVouch.ddate>=(select TOP 1 ISNULL(cValue,cDefault) from accinformation where cName=N'dPUStartDate' AND cSysid=N'PU') OR PU_T_VMIUsedVouch.bPUFirst=1)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_InNotBalance_DGGZ"},{"field":"Type","value":"View"}],"columns":[{"id":"column-389243","object_id":"column-389243","name":"cVouchType","name_without_path":"cVouchType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389244","object_id":"column-389244","name":"cTypeName","name_without_path":"cTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389245","object_id":"column-389245","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389246","object_id":"column-389246","name":"cVouchID","name_without_path":"cVouchID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389247","object_id":"column-389247","name":"dVouchDate","name_without_path":"dVouchDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389248","object_id":"column-389248","name":"cCoDwCode","name_without_path":"cCoDwCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389249","object_id":"column-389249","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389250","object_id":"column-389250","name":"cDwCode","name_without_path":"cDwCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389251","object_id":"column-389251","name":"cDwName","name_without_path":"cDwName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389252","object_id":"column-389252","name":"cDWCCode","name_without_path":"cDWCCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389253","object_id":"column-389253","name":"cHDWCode","name_without_path":"cHDWCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389254","object_id":"column-389254","name":"cHDptCode","name_without_path":"cHDptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389255","object_id":"column-389255","name":"cDWDCode","name_without_path":"cDWDCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389256","object_id":"column-389256","name":"cDeptCode","name_without_path":"cDeptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389257","object_id":"column-389257","name":"cDigest","name_without_path":"cDigest","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389258","object_id":"column-389258","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389259","object_id":"column-389259","name":"cInvName","name_without_path":"cInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389260","object_id":"column-389260","name":"cInvCCode","name_without_path":"cInvCCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389261","object_id":"column-389261","name":"cPerson","name_without_path":"cPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389262","object_id":"column-389262","name":"cHPsnCode","name_without_path":"cHPsnCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389263","object_id":"column-389263","name":"cDwAddress","name_without_path":"cDwAddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389264","object_id":"column-389264","name":"cDwPostCode","name_without_path":"cDwPostCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389265","object_id":"column-389265","name":"cDwEmail","name_without_path":"cDwEmail","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389266","object_id":"column-389266","name":"cDwPerson","name_without_path":"cDwPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389267","object_id":"column-389267","name":"cDwPhone","name_without_path":"cDwPhone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389268","object_id":"column-389268","name":"cDwFax","name_without_path":"cDwFax","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389269","object_id":"column-389269","name":"iAmount_s","name_without_path":"iAmount_s","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389270","object_id":"column-389270","name":"iAmount_f","name_without_path":"iAmount_f","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389271","object_id":"column-389271","name":"iAmount","name_without_path":"iAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389272","object_id":"column-389272","name":"cExch_Name","name_without_path":"cExch_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389273","object_id":"column-389273","name":"iExchRate","name_without_path":"iExchRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389274","object_id":"column-389274","name":"iPrice","name_without_path":"iPrice","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389275","object_id":"column-389275","name":"cAuthID","name_without_path":"cAuthID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389276","object_id":"column-389276","name":"cItem_Class","name_without_path":"cItem_Class","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389277","object_id":"column-389277","name":"cItem_Name","name_without_path":"cItem_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389278","object_id":"column-389278","name":"cItemCode","name_without_path":"cItemCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389279","object_id":"column-389279","name":"cItemName","name_without_path":"cItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389280","object_id":"column-389280","name":"cContractType","name_without_path":"cContractType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389281","object_id":"column-389281","name":"cContractTypeName","name_without_path":"cContractTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389282","object_id":"column-389282","name":"cContractID","name_without_path":"cContractID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-389283","object_id":"column-389283","name":"cContractName","name_without_path":"cContractName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};