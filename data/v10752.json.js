window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10752","name":"FB_RegulateBill_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW FB_RegulateBill_View    \r\nAS     \r\nSELECT    \r\nT.cBillCode AS cVouchId,      \r\nT.cBillCode AS cBillCode,    \r\nT.iYear AS   iYear,  \r\nT.dRegulateDate AS dRegulateDate,      \r\nT.cVersionCode AS cVersionCode,      \r\nvs.cVersionName AS cVersionName,      \r\nT.cFormCode AS cFormCode,      \r\nform.cFormName AS cFormName,      \r\nT.cReason AS cReason,      \r\nT.iState AS iState,      \r\nT.cSubmit AS cSubmit,    \r\nus2.cUser_Name  AS cSubmitName,     \r\nT.cOrganizer AS cOrganizer,  \r\nus1.cUser_Name  AS cOrganizerName,    \r\nPerson.cPersonName AS  cPersonName,    \r\nT.cAuditor AS cAuditor,  \r\nus3.cUser_Name  AS cAuditorName,        \r\nT.dAuditDate AS dAuditDate,      \r\nT.cAuditOpinion AS cAuditOpinion,      \r\nB.cBgItemCode AS cBgItemCode,      \r\nBG.cBgItemname AS cBgItemName,      \r\nB.cDepCode AS cDepCode,      \r\ndp.cDepName AS cDepName,      \r\nb.citemclass AS cItemClass,      \r\nfc.citem_name AS citemclassName,      \r\nB.cItemcode AS cItemCode,      \r\nft.cItemName AS cItemName,      \r\nb.cReason AS cRowReason,      \r\nb.cPeriodCode AS cPeriodCode,      \r\npd.cPeriodName AS iPeriodValue,  \r\npd.cPeriodName AS cPeriodValue,  \r\nb.fOldValue AS fOldValue,      \r\nb.fNewValue AS fNewValue,      \r\nb.fNewValue - b.fOldValue AS  fUpdateData, \r\nb.fNewValue - b.fOldValue AS  fUpdateValue    \r\nFROM dbo.FB_RegulateBill T       \r\nLEFT JOIN dbo.FB_RegulateBill_Sub B ON B.cBillCode = T.cBillCode    AND T.iyear =  B.iYear   \r\nLEFT JOIN FB_BgItem BG ON B.cBgItemCode = BG.cBgItemCode AND b.iyear = bg.iYear    \r\nLEFT JOIN dbo.Department Dp ON B.cDepCode = dp.cDepCode     \r\nLEFT JOIN dbo.fitem fc ON b.citemclass = fc.citem_class      \r\nLEFT JOIN dbo.GL_AllItemName ft ON b.citemclass = ft.citem_class AND b.cItemcode = ft.citemcode      \r\ninner JOIN dbo.FB_Form form ON form.cFormCode = T.cFormCode    AND T.iyear = form.iYear and isnull(form.cMakingMenuID,N'')<>N''     \r\nLEFT JOIN dbo.FB_Period pd ON pd.cPeriodCode = B.cPeriodCode      AND b.iyear = pd.iYear    \r\nLEFT JOIN dbo.FB_Version vs ON vs.cVersionCode = T.cVersionCode  AND T.iyear =  vs.iYear      \r\nLEFT JOIN dbo.Person ON T.cOrganizer = dbo.Person.cPersonCode    \r\nLEFT JOIN UA_user us1 ON T.cOrganizer = us1.cUser_Id  \r\nLEFT JOIN UA_user us2 ON T.cSubmit = us2.cUser_Id  \r\nLEFT JOIN UA_user us3 ON T.cAuditor = us3.cUser_Id","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"FB_RegulateBill_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-204239","object_id":"column-204239","name":"cVouchId","name_without_path":"cVouchId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"22","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204240","object_id":"column-204240","name":"cBillCode","name_without_path":"cBillCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"22","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204241","object_id":"column-204241","name":"iYear","name_without_path":"iYear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204242","object_id":"column-204242","name":"dRegulateDate","name_without_path":"dRegulateDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204243","object_id":"column-204243","name":"cVersionCode","name_without_path":"cVersionCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204244","object_id":"column-204244","name":"cVersionName","name_without_path":"cVersionName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204245","object_id":"column-204245","name":"cFormCode","name_without_path":"cFormCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204246","object_id":"column-204246","name":"cFormName","name_without_path":"cFormName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204247","object_id":"column-204247","name":"cReason","name_without_path":"cReason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204248","object_id":"column-204248","name":"iState","name_without_path":"iState","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204249","object_id":"column-204249","name":"cSubmit","name_without_path":"cSubmit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204250","object_id":"column-204250","name":"cSubmitName","name_without_path":"cSubmitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204251","object_id":"column-204251","name":"cOrganizer","name_without_path":"cOrganizer","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204252","object_id":"column-204252","name":"cOrganizerName","name_without_path":"cOrganizerName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204253","object_id":"column-204253","name":"cPersonName","name_without_path":"cPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204254","object_id":"column-204254","name":"cAuditor","name_without_path":"cAuditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204255","object_id":"column-204255","name":"cAuditorName","name_without_path":"cAuditorName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204256","object_id":"column-204256","name":"dAuditDate","name_without_path":"dAuditDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204257","object_id":"column-204257","name":"cAuditOpinion","name_without_path":"cAuditOpinion","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204258","object_id":"column-204258","name":"cBgItemCode","name_without_path":"cBgItemCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204259","object_id":"column-204259","name":"cBgItemName","name_without_path":"cBgItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204260","object_id":"column-204260","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204261","object_id":"column-204261","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204262","object_id":"column-204262","name":"cItemClass","name_without_path":"cItemClass","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204263","object_id":"column-204263","name":"citemclassName","name_without_path":"citemclassName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204264","object_id":"column-204264","name":"cItemCode","name_without_path":"cItemCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204265","object_id":"column-204265","name":"cItemName","name_without_path":"cItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204266","object_id":"column-204266","name":"cRowReason","name_without_path":"cRowReason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204267","object_id":"column-204267","name":"cPeriodCode","name_without_path":"cPeriodCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204268","object_id":"column-204268","name":"iPeriodValue","name_without_path":"iPeriodValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204269","object_id":"column-204269","name":"cPeriodValue","name_without_path":"cPeriodValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204270","object_id":"column-204270","name":"fOldValue","name_without_path":"fOldValue","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204271","object_id":"column-204271","name":"fNewValue","name_without_path":"fNewValue","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204272","object_id":"column-204272","name":"fUpdateData","name_without_path":"fUpdateData","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"22, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204273","object_id":"column-204273","name":"fUpdateValue","name_without_path":"fUpdateValue","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"22, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};