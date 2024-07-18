window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6546","name":"HR_TM_PreDutyClassDayResult","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_TM_PreDutyClassDayResult"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-80850","object_id":"column-80850","name":"iRecordId","name_without_path":"iRecordId","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80851","object_id":"column-80851","name":"dDutyDate","name_without_path":"dDutyDate","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":"create default D_UFDate\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80852","object_id":"column-80852","name":"cDutyCode","name_without_path":"cDutyCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80853","object_id":"column-80853","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80854","object_id":"column-80854","name":"nWorkHours","name_without_path":"nWorkHours","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"4, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80855","object_id":"column-80855","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80856","object_id":"column-80856","name":"p1Start","name_without_path":"p1Start","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80857","object_id":"column-80857","name":"p1StartCard","name_without_path":"p1StartCard","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80858","object_id":"column-80858","name":"p2Start","name_without_path":"p2Start","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80859","object_id":"column-80859","name":"p3Start","name_without_path":"p3Start","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80860","object_id":"column-80860","name":"p1End","name_without_path":"p1End","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80861","object_id":"column-80861","name":"p2End","name_without_path":"p2End","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80862","object_id":"column-80862","name":"p3End","name_without_path":"p3End","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80863","object_id":"column-80863","name":"rDutyType","name_without_path":"rDutyType","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80864","object_id":"column-80864","name":"rDateProperty","name_without_path":"rDateProperty","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80865","object_id":"column-80865","name":"iWorkMinute","name_without_path":"iWorkMinute","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80866","object_id":"column-80866","name":"nWorkDays","name_without_path":"nWorkDays","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"4, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80867","object_id":"column-80867","name":"p4Start","name_without_path":"p4Start","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80868","object_id":"column-80868","name":"p4End","name_without_path":"p4End","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80869","object_id":"column-80869","name":"p5Start","name_without_path":"p5Start","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80870","object_id":"column-80870","name":"p5End","name_without_path":"p5End","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80871","object_id":"column-80871","name":"dDutyCardStart","name_without_path":"dDutyCardStart","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80872","object_id":"column-80872","name":"dDutyCardEnd","name_without_path":"dDutyCardEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80873","object_id":"column-80873","name":"dDutyStart","name_without_path":"dDutyStart","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80874","object_id":"column-80874","name":"dDutyOff","name_without_path":"dDutyOff","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDatetime: nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDatetime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80875","object_id":"column-80875","name":"bNormal","name_without_path":"bNormal","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":"'1'","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80876","object_id":"column-80876","name":"vSaveDutyBasic","name_without_path":"vSaveDutyBasic","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80877","object_id":"column-80877","name":"bDutyBasic","name_without_path":"bDutyBasic","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80878","object_id":"column-80878","name":"DB_iWorkMinute","name_without_path":"DB_iWorkMinute","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80879","object_id":"column-80879","name":"DB_ManHours","name_without_path":"DB_ManHours","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"6, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80880","object_id":"column-80880","name":"DB_dDutyStart","name_without_path":"DB_dDutyStart","description":null,"is_pk":false,"is_identity":false,"data_type":"UFTime: nchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFTime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80881","object_id":"column-80881","name":"DB_dDutyOff","name_without_path":"DB_dDutyOff","description":null,"is_pk":false,"is_identity":false,"data_type":"UFTime: nchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFTime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80882","object_id":"column-80882","name":"DB_bStartOver","name_without_path":"DB_bStartOver","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80883","object_id":"column-80883","name":"DB_bEndOver","name_without_path":"DB_bEndOver","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80884","object_id":"column-80884","name":"DB_iDutyOver","name_without_path":"DB_iDutyOver","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80885","object_id":"column-80885","name":"DB_iOffOver","name_without_path":"DB_iOffOver","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80886","object_id":"column-80886","name":"DB_dStartCTime","name_without_path":"DB_dStartCTime","description":null,"is_pk":false,"is_identity":false,"data_type":"UFTime: nchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFTime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80887","object_id":"column-80887","name":"DB_dEndCTime","name_without_path":"DB_dEndCTime","description":null,"is_pk":false,"is_identity":false,"data_type":"UFTime: nchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFTime\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80888","object_id":"column-80888","name":"bJoinDuty","name_without_path":"bJoinDuty","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80889","object_id":"column-80889","name":"cShiftSource","name_without_path":"cShiftSource","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"2","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-80890","object_id":"column-80890","name":"pk_HR_TM_DutyClassDayResult","name_without_path":"pk_HR_TM_DutyClassDayResult","description":null,"is_pk":true,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"create default D_UFUID\r\n    as newid()\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"pk_HR_TM_PreDutyClassDayResult","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"pk_HR_TM_DutyClassDayResult","name":"pk_HR_TM_DutyClassDayResult"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};