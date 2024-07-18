window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11382","name":"HR_v_TM_SignCard_App_Head_ERP","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[HR_v_TM_SignCard_App_Head_ERP]\r\nAS\r\n    SELECT  app.VoucherId ,\r\n            app.VoucherCode ,\r\n            app.VoucherType ,\r\n            app.PsnCode ,\r\n            app.DptCode ,\r\n            r.vName AS Reason ,\r\n            app.Type ,\r\n            app.Remark ,\r\n            app.EndTime ,\r\n            app.Hours ,\r\n            app.CreateOn ,\r\n            p.cPsn_Name AS Creater ,\r\n            CONVERT(NVARCHAR(16), app.SubmitOn, 120) AS SubmitOn ,\r\n            app.AuditOn ,\r\n            app.Auditor ,\r\n            app.Status ,\r\n            app.Role ,\r\n            app.vRestPeriod ,\r\n            CASE WHEN app.bManual = 0 THEN '由排班自动生成'\r\n                 WHEN app.bManual = 1 THEN '手工增加'\r\n            END AS bManual ,\r\n            CASE WHEN bManual = 1 THEN CONVERT(NVARCHAR(16), BeginTime, 120)\r\n                 ELSE CONVERT(NVARCHAR(10), BeginTime, 120) + ISNULL(' 至 '\r\n                                                              + CONVERT(NVARCHAR(10), EndTime, 120),\r\n                                                              '')\r\n            END AS BeginTime,\r\n            s.vdescription AS StatusName\r\n    FROM    dbo.HR_TM_SignCard_App app\r\n            JOIN dbo.hr_hi_person p ON app.Creater = p.cPsn_Num\r\n            JOIN dbo.HR_TM_SignCardReason r ON app.Reason = r.cCode\r\n            JOIN hr_ct099  s ON app.Status=s.ccodeid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_v_TM_SignCard_App_Head_ERP"},{"field":"Type","value":"View"}],"columns":[{"id":"column-228124","object_id":"column-228124","name":"VoucherId","name_without_path":"VoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228125","object_id":"column-228125","name":"VoucherCode","name_without_path":"VoucherCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228126","object_id":"column-228126","name":"VoucherType","name_without_path":"VoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228127","object_id":"column-228127","name":"PsnCode","name_without_path":"PsnCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228128","object_id":"column-228128","name":"DptCode","name_without_path":"DptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228129","object_id":"column-228129","name":"Reason","name_without_path":"Reason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228130","object_id":"column-228130","name":"Type","name_without_path":"Type","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228131","object_id":"column-228131","name":"Remark","name_without_path":"Remark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228132","object_id":"column-228132","name":"EndTime","name_without_path":"EndTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228133","object_id":"column-228133","name":"Hours","name_without_path":"Hours","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"10, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228134","object_id":"column-228134","name":"CreateOn","name_without_path":"CreateOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228135","object_id":"column-228135","name":"Creater","name_without_path":"Creater","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228136","object_id":"column-228136","name":"SubmitOn","name_without_path":"SubmitOn","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228137","object_id":"column-228137","name":"AuditOn","name_without_path":"AuditOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228138","object_id":"column-228138","name":"Auditor","name_without_path":"Auditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228139","object_id":"column-228139","name":"Status","name_without_path":"Status","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228140","object_id":"column-228140","name":"Role","name_without_path":"Role","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228141","object_id":"column-228141","name":"vRestPeriod","name_without_path":"vRestPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228142","object_id":"column-228142","name":"bManual","name_without_path":"bManual","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"14","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228143","object_id":"column-228143","name":"BeginTime","name_without_path":"BeginTime","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228144","object_id":"column-228144","name":"StatusName","name_without_path":"StatusName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};