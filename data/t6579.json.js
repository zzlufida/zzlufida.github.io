window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6579","name":"hr_tm_VacRate","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_tm_VacRate"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-81414","object_id":"column-81414","name":"iRecordId","name_without_path":"iRecordId","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81415","object_id":"column-81415","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81416","object_id":"column-81416","name":"vDepCode","name_without_path":"vDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81417","object_id":"column-81417","name":"cYear","name_without_path":"cYear","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81418","object_id":"column-81418","name":"cVacType","name_without_path":"cVacType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81419","object_id":"column-81419","name":"dBeginDate","name_without_path":"dBeginDate","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDate\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81420","object_id":"column-81420","name":"dEndDate","name_without_path":"dEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDate\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81421","object_id":"column-81421","name":"nTotal","name_without_path":"nTotal","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"8, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81422","object_id":"column-81422","name":"nRested","name_without_path":"nRested","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"10, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81423","object_id":"column-81423","name":"vRemark","name_without_path":"vRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81424","object_id":"column-81424","name":"pk_hr_tm_VacRate","name_without_path":"pk_hr_tm_VacRate","description":null,"is_pk":true,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"create default D_UFUID\r\n    as newid()\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81425","object_id":"column-81425","name":"nStatus1","name_without_path":"nStatus1","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81426","object_id":"column-81426","name":"vStatus2","name_without_path":"vStatus2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81427","object_id":"column-81427","name":"bLastFlag","name_without_path":"bLastFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81428","object_id":"column-81428","name":"vBalanceMoth","name_without_path":"vBalanceMoth","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"7","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81429","object_id":"column-81429","name":"bCanceled","name_without_path":"bCanceled","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81430","object_id":"column-81430","name":"bDisable","name_without_path":"bDisable","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81431","object_id":"column-81431","name":"nInitDoneVac","name_without_path":"nInitDoneVac","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"7, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81432","object_id":"column-81432","name":"nDelDataVac","name_without_path":"nDelDataVac","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"7, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81433","object_id":"column-81433","name":"nDoneVac","name_without_path":"nDoneVac","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"7, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81434","object_id":"column-81434","name":"nBalancedVac","name_without_path":"nBalancedVac","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"7, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81435","object_id":"column-81435","name":"nVacRete","name_without_path":"nVacRete","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"7, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81436","object_id":"column-81436","name":"nHasDeducted","name_without_path":"nHasDeducted","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"7, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81437","object_id":"column-81437","name":"bBalance","name_without_path":"bBalance","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81438","object_id":"column-81438","name":"iVacRateOrigin","name_without_path":"iVacRateOrigin","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81439","object_id":"column-81439","name":"nTotalSickLeave","name_without_path":"nTotalSickLeave","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"10, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81440","object_id":"column-81440","name":"nTotalAffairLeave","name_without_path":"nTotalAffairLeave","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"10, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81441","object_id":"column-81441","name":"nVacRemain","name_without_path":"nVacRemain","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"10, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81442","object_id":"column-81442","name":"JobNumber","name_without_path":"JobNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81443","object_id":"column-81443","name":"bBalanceVacNext","name_without_path":"bBalanceVacNext","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81444","object_id":"column-81444","name":"nVacBalanceNext","name_without_path":"nVacBalanceNext","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"7, 2","is_nullable":true,"computed_formula":null,"default_value":"0.00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81445","object_id":"column-81445","name":"nVacBalanceThis","name_without_path":"nVacBalanceThis","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"7, 2","is_nullable":true,"computed_formula":null,"default_value":"0.00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81446","object_id":"column-81446","name":"bInvalid","name_without_path":"bInvalid","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81447","object_id":"column-81447","name":"nInvalidVac","name_without_path":"nInvalidVac","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"7, 2","is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81448","object_id":"column-81448","name":"dLastestTime","name_without_path":"dLastestTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81449","object_id":"column-81449","name":"iDelayNum","name_without_path":"iDelayNum","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81450","object_id":"column-81450","name":"nDoneVacAudited","name_without_path":"nDoneVacAudited","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"7, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81451","object_id":"column-81451","name":"nDoneVacAuditing","name_without_path":"nDoneVacAuditing","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"7, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK_HR_TM_VACRATE","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"pk_hr_tm_VacRate","name":"pk_hr_tm_VacRate"}],"custom_fields":{}}],"triggers":[{"name":"tri_hr_tm_vacrate","description":null,"action":"After Insert ","custom_fields":{}}],"dependencies":null,"imported_at":"2024-07-15 13:47"};