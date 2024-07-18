window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11365","name":"HR_v_TM_Leave_App_Head_ERP","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[HR_v_TM_Leave_App_Head_ERP]\r\nAS\r\nSELECT  app.VoucherId ,\r\n        app.VoucherCode ,\r\n        app.VoucherType ,\r\n        app.PsnCode ,\r\n        app.DptCode ,\r\n        app.Reason ,\r\n        t.vName AS Type ,\r\n        app.Remark ,\r\n        CONVERT(NVARCHAR(16), app.BeginTime, 120) AS BeginTime ,\r\n        CONVERT(NVARCHAR(16), app.EndTime, 120) AS EndTime ,\r\n        app.Hours ,\r\n        app.CreateOn ,\r\n        p.cPsn_Name AS Creater ,\r\n        CONVERT(NVARCHAR(16), app.SubmitOn, 120) AS SubmitOn ,\r\n        app.AuditOn ,\r\n        app.Auditor ,\r\n        app.Status ,\r\n        app.Role ,\r\n        app.vRestPeriod ,\r\n        CASE WHEN app.LeaveTimeType = '1' THEN '整天请假'\r\n             WHEN app.LeaveTimeType = '2' THEN '按时点请假'\r\n        END AS LeaveTimeType ,\r\n        app.PlanEndDate ,\r\n        app.LeaveStatus,\r\n        s.vdescription AS StatusName\r\nFROM    dbo.HR_TM_Leave_App app\r\n        JOIN dbo.hr_hi_person p ON app.Creater = p.cPsn_Num\r\n        JOIN dbo.hr_tm_LeaveType t ON app.Type = t.cCode\r\n        JOIN hr_ct099  s ON app.Status=s.ccodeid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_v_TM_Leave_App_Head_ERP"},{"field":"Type","value":"View"}],"columns":[{"id":"column-227762","object_id":"column-227762","name":"VoucherId","name_without_path":"VoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227763","object_id":"column-227763","name":"VoucherCode","name_without_path":"VoucherCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227764","object_id":"column-227764","name":"VoucherType","name_without_path":"VoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227765","object_id":"column-227765","name":"PsnCode","name_without_path":"PsnCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227766","object_id":"column-227766","name":"DptCode","name_without_path":"DptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227767","object_id":"column-227767","name":"Reason","name_without_path":"Reason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227768","object_id":"column-227768","name":"Type","name_without_path":"Type","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227769","object_id":"column-227769","name":"Remark","name_without_path":"Remark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227770","object_id":"column-227770","name":"BeginTime","name_without_path":"BeginTime","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227771","object_id":"column-227771","name":"EndTime","name_without_path":"EndTime","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227772","object_id":"column-227772","name":"Hours","name_without_path":"Hours","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"10, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227773","object_id":"column-227773","name":"CreateOn","name_without_path":"CreateOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227774","object_id":"column-227774","name":"Creater","name_without_path":"Creater","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227775","object_id":"column-227775","name":"SubmitOn","name_without_path":"SubmitOn","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227776","object_id":"column-227776","name":"AuditOn","name_without_path":"AuditOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227777","object_id":"column-227777","name":"Auditor","name_without_path":"Auditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227778","object_id":"column-227778","name":"Status","name_without_path":"Status","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227779","object_id":"column-227779","name":"Role","name_without_path":"Role","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227780","object_id":"column-227780","name":"vRestPeriod","name_without_path":"vRestPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227781","object_id":"column-227781","name":"LeaveTimeType","name_without_path":"LeaveTimeType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227782","object_id":"column-227782","name":"PlanEndDate","name_without_path":"PlanEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227783","object_id":"column-227783","name":"LeaveStatus","name_without_path":"LeaveStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227784","object_id":"column-227784","name":"StatusName","name_without_path":"StatusName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};