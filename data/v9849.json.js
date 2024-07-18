window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9849","name":"Ap_CreditDetail_SA","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  VIEW Ap_CreditDetail_SA\r\nAS \r\nSELECT\r\n         cDwCode As cCusCode,cPerson As cPersonCode,cDeptCode As cDepCode,\r\n         dVouchDate As dDate,cTypeName As cVouchType,cCoVouchID As cCode,sum(iDAmount-iCAmount) As Exsum,1 as bverify\r\nFROM \r\n         Ar_Detail with(nolock) LEFT JOIN Ap_VouchType ON Ar_Detail.cCoVouchType=Ap_VouchType.cTypeCode\r\nWHERE \r\n         Ar_Detail.cFlag='AR' and iFlag<2 \r\nGROUP BY \r\n         cDwCode,cPerson,cDeptCode,dVouchDate,cTypeName,cCoVouchID\r\nHAVING\r\n         sum(iDAmount-iCAmount)<>0\r\nUNION ALL\r\nSELECT \r\n         cDwCode,cPerson,cDeptCode,dVouchDate,cTypeName,cVouchID,case when bd_c=1 then iAmount else -iAmount end,0 as bverify\r\nFROM \r\n         Ap_Vouch with(nolock) LEFT JOIN Ap_VouchType ON Ap_Vouch.cVouchType=Ap_VouchType.cTypeCode\r\nWHERE \r\n         Ap_Vouch.cFlag='AR' and cCheckMan Is Null\r\n         And ((select case when lower(cvalue)='true' then 1 else 0 end from accinformation where csysid='SA' and cname='bCrCheckWhen') = N'1')  --QYF 信用 U82018122400864 N'0'->N'1'\r\nUNION ALL\r\nSELECT \r\n         cCusVen,cPersonCode,cDepCode,dVouchDate,cTypeName,cVouchID,\r\n         case when cVouchType='49' then iAmt else -iAmt end,1 as bverify\r\nFROM\r\n         Ap_CloseBills with(nolock) INNER JOIN Ap_CloseBill with(nolock) ON Ap_CloseBills.iID=Ap_CloseBill.iID\r\n         LEFT JOIN Ap_VouchType ON Ap_CloseBill.cVouchType=Ap_VouchType.cTypeCode\r\nWHERE \r\n         Ap_CloseBill.cFlag='AR' and cCheckMan Is null and iType<2 and IsNull(cCancelNo,'')=''\r\n         And ((select ISNULL(cValue,cDefault) from accinformation where cSysID=N'AR' and cName=N'bCtrlCreditMode') = N'0')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Ap_CreditDetail_SA"},{"field":"Type","value":"View"}],"columns":[{"id":"column-159357","object_id":"column-159357","name":"cCusCode","name_without_path":"cCusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-159358","object_id":"column-159358","name":"cPersonCode","name_without_path":"cPersonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-159359","object_id":"column-159359","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-159360","object_id":"column-159360","name":"dDate","name_without_path":"dDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-159361","object_id":"column-159361","name":"cVouchType","name_without_path":"cVouchType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-159362","object_id":"column-159362","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-159363","object_id":"column-159363","name":"Exsum","name_without_path":"Exsum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-159364","object_id":"column-159364","name":"bverify","name_without_path":"bverify","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};