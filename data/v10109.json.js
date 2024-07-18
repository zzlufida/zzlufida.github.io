window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10109","name":"caq_InitLeft_all","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create view caq_InitLeft_all as \r\n\tselect cppid,cbatch,min(autoid) as autoid,\r\n\t\tsum(case camotype when 0 then ionptotalamo else 0 end) as imatfee,\r\n\t\tsum(case camotype when 1 then ionptotalamo else 0 end) as ilaborfee,\r\n\t\tsum(case camotype when 2 then ionptotalamo else 0 end) as iauxifee,\r\n\t\tsum(case camotype when 3 then ionptotalamo else 0 end) as imanufee,\r\n\t\tsum(case camotype when 4 then ionptotalamo else 0 end) as iotherfee,\r\n\t\tsum(ionptotalamo) As iallfee\r\n\tfrom (\r\n\t\tselect cppid,cbatch,autoid,iOnptotalAmo,cAmotype from ca_amoct where iperiod = 0\r\n\t\tunion all\r\n\t\tselect cppid,cbatch,2147483647 as autoid,\r\n\t\t\tcase iType when 2 then -iOnptotalAmo else iOnpTotalAmo end as iOnptotalAmo,\r\n\t\t\tcamotype \r\n\t\tfrom ca_moveAmoct where iPeriod = 0 and bQcAdjust = 1 and itype in (1,2)\r\n\t) T group by cppid,cbatch","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"caq_InitLeft_all"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174131","object_id":"column-174131","name":"cppid","name_without_path":"cppid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174132","object_id":"column-174132","name":"cbatch","name_without_path":"cbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174133","object_id":"column-174133","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174134","object_id":"column-174134","name":"imatfee","name_without_path":"imatfee","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174135","object_id":"column-174135","name":"ilaborfee","name_without_path":"ilaborfee","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174136","object_id":"column-174136","name":"iauxifee","name_without_path":"iauxifee","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174137","object_id":"column-174137","name":"imanufee","name_without_path":"imanufee","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174138","object_id":"column-174138","name":"iotherfee","name_without_path":"iotherfee","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174139","object_id":"column-174139","name":"iallfee","name_without_path":"iallfee","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};