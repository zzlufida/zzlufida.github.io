window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10751","name":"FB_FormDataView","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--add by panglh at 20200211 for U82019121701532 add formData.cRemark\r\nCreate VIEW [dbo].[FB_FormDataView] \r\nAS \r\nSELECT  formData.cVouchID AS cVouchID,\r\n        formData.iyear AS iyear,\r\n        formData.dMakeDate AS dMakeDate,\r\n        formData.cFormCode AS cFormCode,\r\n        Form.cFormName AS cFormName,\r\n        formData.cDepCode AS cDepCode,\r\n        dept.cDepName AS cDepName,\r\n        formData.cBgItemCode AS cBgItemCode,\r\n        BgItem.cBgItemName AS cBgItemName,\r\n        formData.cItemClass AS cItemClass,\r\n        ItemClass.citem_name AS cItemClassName,\r\n        formData.cItemCode AS cItemCode,\r\n        Item.citemname AS cItemName,\r\n        formData.cVersionCode AS cVersionCode,\r\n        Versions.cVersionName AS cVersionName,\r\n        formData.cMaker AS cMakerID,\r\n        Maker.cUser_Name AS cMakerName,\r\n        formData.cSubmitter AS cSubmitterID,\r\n        Submiter.cUser_Name AS cSubmitterName,\r\n        formData.cAuditor AS cAuditorID,\r\n        formData.dAuditDate AS dAuditDate,\r\n        Auditor.cUser_Name AS cAuditorName,\r\n        formData.istate as istate,\r\n\t\tformData.cRemark as cRemark\r\nFROM    dbo.FB_FormData formData\r\n        LEFT JOIN Department dept ON formData.cDepCode = dept.cDepCode\r\n        LEFT JOIN FB_Form Form ON Form.cFormCode = formData.cFormCode and Form.iyear = formData.iyear\r\n        LEFT JOIN FB_BgItem BgItem ON formData.cBgItemCode = BgItem.cBgItemCode\r\n        LEFT JOIN fitem ItemClass ON  formData.cItemClass = ItemClass.citem_class\r\n        LEFT JOIN GL_AllItemName Item ON formData.cItemClass = Item.citem_class and formdata.cItemCode = Item.citemcode\r\n        LEFT JOIN FB_Version Versions ON Versions.cVersionCode = formData.cVersionCode and Versions.iyear = formData.iyear\r\n        LEFT JOIN UA_User Maker ON Maker.cUser_Id = formData.cMaker\r\n        LEFT JOIN UA_User Auditor ON Auditor.cUser_Id = formData.cAuditor\r\n        LEFT JOIN UA_User Submiter ON Submiter.cUser_Id = formData.cSubmitter","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"FB_FormDataView"},{"field":"Type","value":"View"}],"columns":[{"id":"column-204215","object_id":"column-204215","name":"cVouchID","name_without_path":"cVouchID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"22","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204216","object_id":"column-204216","name":"iyear","name_without_path":"iyear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204217","object_id":"column-204217","name":"dMakeDate","name_without_path":"dMakeDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204218","object_id":"column-204218","name":"cFormCode","name_without_path":"cFormCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204219","object_id":"column-204219","name":"cFormName","name_without_path":"cFormName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204220","object_id":"column-204220","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204221","object_id":"column-204221","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204222","object_id":"column-204222","name":"cBgItemCode","name_without_path":"cBgItemCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204223","object_id":"column-204223","name":"cBgItemName","name_without_path":"cBgItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204224","object_id":"column-204224","name":"cItemClass","name_without_path":"cItemClass","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204225","object_id":"column-204225","name":"cItemClassName","name_without_path":"cItemClassName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204226","object_id":"column-204226","name":"cItemCode","name_without_path":"cItemCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204227","object_id":"column-204227","name":"cItemName","name_without_path":"cItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204228","object_id":"column-204228","name":"cVersionCode","name_without_path":"cVersionCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204229","object_id":"column-204229","name":"cVersionName","name_without_path":"cVersionName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204230","object_id":"column-204230","name":"cMakerID","name_without_path":"cMakerID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204231","object_id":"column-204231","name":"cMakerName","name_without_path":"cMakerName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204232","object_id":"column-204232","name":"cSubmitterID","name_without_path":"cSubmitterID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204233","object_id":"column-204233","name":"cSubmitterName","name_without_path":"cSubmitterName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204234","object_id":"column-204234","name":"cAuditorID","name_without_path":"cAuditorID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204235","object_id":"column-204235","name":"dAuditDate","name_without_path":"dAuditDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204236","object_id":"column-204236","name":"cAuditorName","name_without_path":"cAuditorName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204237","object_id":"column-204237","name":"istate","name_without_path":"istate","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204238","object_id":"column-204238","name":"cRemark","name_without_path":"cRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};