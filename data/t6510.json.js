window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6510","name":"hr_tm_LeaveDeduct","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_tm_LeaveDeduct"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-79882","object_id":"column-79882","name":"PK_hr_tm_LeaveDeduct","name_without_path":"PK_hr_tm_LeaveDeduct","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79883","object_id":"column-79883","name":"fk_Pk_hr_tm_Leave","name_without_path":"fk_Pk_hr_tm_Leave","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79884","object_id":"column-79884","name":"OverTimeLineID","name_without_path":"OverTimeLineID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79885","object_id":"column-79885","name":"irowno","name_without_path":"irowno","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79886","object_id":"column-79886","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79887","object_id":"column-79887","name":"cLeaveType","name_without_path":"cLeaveType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79888","object_id":"column-79888","name":"nDeductedOverTime","name_without_path":"nDeductedOverTime","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"6, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79889","object_id":"column-79889","name":"nDeductedLeaveTime","name_without_path":"nDeductedLeaveTime","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"6, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79890","object_id":"column-79890","name":"cDealPeriod","name_without_path":"cDealPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79891","object_id":"column-79891","name":"iDeductedFactor","name_without_path":"iDeductedFactor","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"6, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79892","object_id":"column-79892","name":"dOperatTime","name_without_path":"dOperatTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79893","object_id":"column-79893","name":"cVoucherId","name_without_path":"cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79897","object_id":"column-79897","name":"iOverTimeRowNo","name_without_path":"iOverTimeRowNo","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79894","object_id":"column-79894","name":"dJbDate","name_without_path":"dJbDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79895","object_id":"column-79895","name":"nAbsentOverHours","name_without_path":"nAbsentOverHours","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"6, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79896","object_id":"column-79896","name":"nAvailableOverHours","name_without_path":"nAvailableOverHours","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"6, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK_hr_tm_LeaveDeduct","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PK_hr_tm_LeaveDeduct","name":"PK_hr_tm_LeaveDeduct"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};