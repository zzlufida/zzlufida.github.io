window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6492","name":"HR_TM_DutyClassDayResult","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_TM_DutyClassDayResult"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-79506","object_id":"column-79506","name":"iRecordId","name_without_path":"iRecordId","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79507","object_id":"column-79507","name":"dDutyDate","name_without_path":"dDutyDate","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":"create default D_UFDate\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79508","object_id":"column-79508","name":"cDutyCode","name_without_path":"cDutyCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79509","object_id":"column-79509","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79510","object_id":"column-79510","name":"nWorkHours","name_without_path":"nWorkHours","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"4, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79511","object_id":"column-79511","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79512","object_id":"column-79512","name":"p1Start","name_without_path":"p1Start","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79513","object_id":"column-79513","name":"p1StartCard","name_without_path":"p1StartCard","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79514","object_id":"column-79514","name":"p2Start","name_without_path":"p2Start","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79515","object_id":"column-79515","name":"p3Start","name_without_path":"p3Start","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79516","object_id":"column-79516","name":"p1End","name_without_path":"p1End","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79517","object_id":"column-79517","name":"p2End","name_without_path":"p2End","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79518","object_id":"column-79518","name":"p3End","name_without_path":"p3End","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79519","object_id":"column-79519","name":"rDutyType","name_without_path":"rDutyType","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79520","object_id":"column-79520","name":"rDateProperty","name_without_path":"rDateProperty","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79521","object_id":"column-79521","name":"iWorkMinute","name_without_path":"iWorkMinute","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79522","object_id":"column-79522","name":"nWorkDays","name_without_path":"nWorkDays","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"4, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79523","object_id":"column-79523","name":"p4Start","name_without_path":"p4Start","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79524","object_id":"column-79524","name":"p4End","name_without_path":"p4End","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79525","object_id":"column-79525","name":"p5Start","name_without_path":"p5Start","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79526","object_id":"column-79526","name":"p5End","name_without_path":"p5End","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79527","object_id":"column-79527","name":"dDutyCardStart","name_without_path":"dDutyCardStart","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79528","object_id":"column-79528","name":"dDutyCardEnd","name_without_path":"dDutyCardEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79529","object_id":"column-79529","name":"dDutyStart","name_without_path":"dDutyStart","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79530","object_id":"column-79530","name":"dDutyOff","name_without_path":"dDutyOff","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79531","object_id":"column-79531","name":"bNormal","name_without_path":"bNormal","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":"'1'","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79532","object_id":"column-79532","name":"vSaveDutyBasic","name_without_path":"vSaveDutyBasic","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79533","object_id":"column-79533","name":"bDutyBasic","name_without_path":"bDutyBasic","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79534","object_id":"column-79534","name":"DB_iWorkMinute","name_without_path":"DB_iWorkMinute","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79535","object_id":"column-79535","name":"DB_ManHours","name_without_path":"DB_ManHours","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"6, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79536","object_id":"column-79536","name":"DB_dDutyStart","name_without_path":"DB_dDutyStart","description":null,"is_pk":false,"is_identity":false,"data_type":"UFTime: nchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFTime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79537","object_id":"column-79537","name":"DB_dDutyOff","name_without_path":"DB_dDutyOff","description":null,"is_pk":false,"is_identity":false,"data_type":"UFTime: nchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFTime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79538","object_id":"column-79538","name":"DB_bStartOver","name_without_path":"DB_bStartOver","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79539","object_id":"column-79539","name":"DB_bEndOver","name_without_path":"DB_bEndOver","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79540","object_id":"column-79540","name":"DB_iDutyOver","name_without_path":"DB_iDutyOver","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79541","object_id":"column-79541","name":"DB_iOffOver","name_without_path":"DB_iOffOver","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79542","object_id":"column-79542","name":"DB_dStartCTime","name_without_path":"DB_dStartCTime","description":null,"is_pk":false,"is_identity":false,"data_type":"UFTime: nchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFTime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79543","object_id":"column-79543","name":"DB_dEndCTime","name_without_path":"DB_dEndCTime","description":null,"is_pk":false,"is_identity":false,"data_type":"UFTime: nchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFTime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79544","object_id":"column-79544","name":"bJoinDuty","name_without_path":"bJoinDuty","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79545","object_id":"column-79545","name":"cShiftSource","name_without_path":"cShiftSource","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"2","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-79546","object_id":"column-79546","name":"pk_HR_TM_DutyClassDayResult","name_without_path":"pk_HR_TM_DutyClassDayResult","description":null,"is_pk":true,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"create default D_UFUID\r\n    as newid()\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"pk_HR_TM_DutyClassDayResult","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"pk_HR_TM_DutyClassDayResult","name":"pk_HR_TM_DutyClassDayResult"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};