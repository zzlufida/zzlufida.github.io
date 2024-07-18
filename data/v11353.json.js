window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11353","name":"HR_v_TM_AnnulLeave_App_Body_ERP","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW HR_v_TM_AnnulLeave_App_Body_ERP\r\nAS\r\nSELECT app.VoucherId,\r\napp.VoucherCode,\r\napp.VoucherType,\r\napp.DptCode,\r\napp.Reason,\r\napp.Type,\r\napp.Remark,\r\napp.AnnuledTime,app.CreateOn,app.Creater,app.SubmitOn,app.AuditOn,app.Auditor,\r\napp.Status,app.Role,app.RestPeriod,app.LeaveVoucherId,\r\nvdescription AS StatusName,\r\nCONVERT(NVARCHAR(100), \r\napp.AnnuledTime, 23) AS AnnuledDate,\r\nSUBSTRING(CONVERT(NVARCHAR(100),app.AnnuledTime, 108),0,6) AS AnnuledOnlyTime,\r\n\r\nCASE WHEN app.Role = '0' THEN p1.cPsn_Name ELSE p2.cPsn_Name END AS cPsn_Name,CASE WHEN app.Role = '0' THEN app.PsnCode ELSE items.PsnCode END AS psnCode,CASE WHEN app.Role = '0' THEN p1.JobNumber ELSE p2.JobNumber END AS JobNumber,\r\nCASE WHEN app.Role = '0' THEN d1.cDepName ELSE d2.cDepName END AS cDepName\r\nFROM dbo.HR_TM_AnnulLeave_App app LEFT OUTER JOIN HR_TM_App_Items items\r\nON app.VoucherId = items.VoucherId AND items.VoucherType = 'HR.AnnulLeave'\r\nLEFT OUTER JOIN dbo.hr_hi_person p1 ON app.PsnCode = p1.cPsn_Num LEFT OUTER JOIN dbo.hr_hi_person p2 ON items.PsnCode = p2.cPsn_Num\r\nLEFT OUTER JOIN dbo.Department d1 ON p1.cDept_num = d1.cDepCode LEFT OUTER JOIN dbo.Department d2 ON p2.cDept_num = d2.cDepCode\r\nLEFT OUTER JOIN hr_ct099 s ON app.Status=s.ccodeid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_v_TM_AnnulLeave_App_Body_ERP"},{"field":"Type","value":"View"}],"columns":[{"id":"column-227459","object_id":"column-227459","name":"VoucherId","name_without_path":"VoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227460","object_id":"column-227460","name":"VoucherCode","name_without_path":"VoucherCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227461","object_id":"column-227461","name":"VoucherType","name_without_path":"VoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227462","object_id":"column-227462","name":"DptCode","name_without_path":"DptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227463","object_id":"column-227463","name":"Reason","name_without_path":"Reason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227464","object_id":"column-227464","name":"Type","name_without_path":"Type","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227465","object_id":"column-227465","name":"Remark","name_without_path":"Remark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227466","object_id":"column-227466","name":"AnnuledTime","name_without_path":"AnnuledTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227467","object_id":"column-227467","name":"CreateOn","name_without_path":"CreateOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227468","object_id":"column-227468","name":"Creater","name_without_path":"Creater","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227469","object_id":"column-227469","name":"SubmitOn","name_without_path":"SubmitOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227470","object_id":"column-227470","name":"AuditOn","name_without_path":"AuditOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227471","object_id":"column-227471","name":"Auditor","name_without_path":"Auditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227472","object_id":"column-227472","name":"Status","name_without_path":"Status","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227473","object_id":"column-227473","name":"Role","name_without_path":"Role","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227474","object_id":"column-227474","name":"RestPeriod","name_without_path":"RestPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227475","object_id":"column-227475","name":"LeaveVoucherId","name_without_path":"LeaveVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227476","object_id":"column-227476","name":"StatusName","name_without_path":"StatusName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227477","object_id":"column-227477","name":"AnnuledDate","name_without_path":"AnnuledDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227478","object_id":"column-227478","name":"AnnuledOnlyTime","name_without_path":"AnnuledOnlyTime","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227479","object_id":"column-227479","name":"cPsn_Name","name_without_path":"cPsn_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227480","object_id":"column-227480","name":"psnCode","name_without_path":"psnCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227481","object_id":"column-227481","name":"JobNumber","name_without_path":"JobNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227482","object_id":"column-227482","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};