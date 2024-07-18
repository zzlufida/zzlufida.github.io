window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11380","name":"HR_V_TM_SignCard_App","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--预置请假额度视图 end\r\n\r\n--修改HR_V_TM_SignCard_App视图(考虑经理和员工) begin\r\nCREATE VIEW dbo.HR_V_TM_SignCard_App  \r\nAS  \r\nSELECT app.VoucherId AS pk_hr_tm_SignCard, app.VoucherType, COALESCE(app.PsnCode,items.PsnCode) AS cPsn_num,   \r\n      DptCode AS cDepCode, Type AS cLeaveType, BeginTime AS dBeginDate,   \r\n      EndTime AS dEndDate, Reason AS vLeaveReason, Hours AS nLeaveHours,   \r\n      Auditor AS vApprover, Remark AS vRemark, Status  \r\nFROM dbo.HR_TM_SignCard_App app LEFT OUTER JOIN dbo.HR_TM_App_Items items ON app.VoucherId = items.VoucherId  \r\n--修改HR_V_TM_SignCard_App视图(考虑经理和员工) end","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_V_TM_SignCard_App"},{"field":"Type","value":"View"}],"columns":[{"id":"column-228085","object_id":"column-228085","name":"pk_hr_tm_SignCard","name_without_path":"pk_hr_tm_SignCard","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228086","object_id":"column-228086","name":"VoucherType","name_without_path":"VoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228087","object_id":"column-228087","name":"cPsn_num","name_without_path":"cPsn_num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228088","object_id":"column-228088","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228089","object_id":"column-228089","name":"cLeaveType","name_without_path":"cLeaveType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228090","object_id":"column-228090","name":"dBeginDate","name_without_path":"dBeginDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228091","object_id":"column-228091","name":"dEndDate","name_without_path":"dEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228092","object_id":"column-228092","name":"vLeaveReason","name_without_path":"vLeaveReason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228093","object_id":"column-228093","name":"nLeaveHours","name_without_path":"nLeaveHours","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"10, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228094","object_id":"column-228094","name":"vApprover","name_without_path":"vApprover","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228095","object_id":"column-228095","name":"vRemark","name_without_path":"vRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228096","object_id":"column-228096","name":"Status","name_without_path":"Status","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};