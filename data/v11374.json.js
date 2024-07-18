window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11374","name":"hr_v_tm_OverTimeResult","subtype":"VIEW","is_user_defined":false,"description":null,"script":"/*==============================================================*/\r\n/* View: hr_v_tm_OverTimeResult                                 */\r\n/*==============================================================*/\r\ncreate view hr_v_tm_OverTimeResult as \r\nselect hr_tm_OverTimeresult.uRecordId as pk_hr_v_tm_OverTimeResult, cPsn_Num, vOverTimeName, nOvertimeHours, \r\nnManHours, dJbDate, bOverDate, vJbCode, vReason, vApprover, vRemark, 1 as bLastFlag, '' as vStatus1, 0 as nStatus2\r\nfrom hr_tm_OverTimeresult,hr_tm_OverTime\r\nwhere hr_tm_OverTimeresult.uOverTimeCode = hr_tm_OverTime.uOverTimeCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_tm_OverTimeResult"},{"field":"Type","value":"View"}],"columns":[{"id":"column-227919","object_id":"column-227919","name":"pk_hr_v_tm_OverTimeResult","name_without_path":"pk_hr_v_tm_OverTimeResult","description":null,"is_pk":false,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227920","object_id":"column-227920","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227921","object_id":"column-227921","name":"vOverTimeName","name_without_path":"vOverTimeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227922","object_id":"column-227922","name":"nOvertimeHours","name_without_path":"nOvertimeHours","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"6, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227923","object_id":"column-227923","name":"nManHours","name_without_path":"nManHours","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"6, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227924","object_id":"column-227924","name":"dJbDate","name_without_path":"dJbDate","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227925","object_id":"column-227925","name":"bOverDate","name_without_path":"bOverDate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227926","object_id":"column-227926","name":"vJbCode","name_without_path":"vJbCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227927","object_id":"column-227927","name":"vReason","name_without_path":"vReason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227928","object_id":"column-227928","name":"vApprover","name_without_path":"vApprover","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227929","object_id":"column-227929","name":"vRemark","name_without_path":"vRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227930","object_id":"column-227930","name":"bLastFlag","name_without_path":"bLastFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227931","object_id":"column-227931","name":"vStatus1","name_without_path":"vStatus1","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-227932","object_id":"column-227932","name":"nStatus2","name_without_path":"nStatus2","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};