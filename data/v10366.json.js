window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10366","name":"CN_CashSerialNumberView","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View CN_CashSerialNumberView \r\nAS\r\n\tselect CN_CashSerialNumber.ID AS ID, \r\n               CN_CashSerialNumber.SNWord AS SNWord,\r\n\t       CN_CashSerialNumber.SNText AS SNText,\r\n\t       CN_CashSerialNumber.U8VouchSign AS U8VouchSign\r\n\tfrom CN_CashSerialNumber with (nolock)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CN_CashSerialNumberView"},{"field":"Type","value":"View"}],"columns":[{"id":"column-184808","object_id":"column-184808","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-184809","object_id":"column-184809","name":"SNWord","name_without_path":"SNWord","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-184810","object_id":"column-184810","name":"SNText","name_without_path":"SNText","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-184811","object_id":"column-184811","name":"U8VouchSign","name_without_path":"U8VouchSign","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};