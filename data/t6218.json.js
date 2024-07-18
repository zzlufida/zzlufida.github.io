window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6218","name":"hr_ht_Dispu","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_ht_Dispu"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-75963","object_id":"column-75963","name":"PK_Hr_HT_Dispu","name_without_path":"PK_Hr_HT_Dispu","description":null,"is_pk":true,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"create default D_UFUID\r\n    as newid()\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75933","object_id":"column-75933","name":"vDispuNo","name_without_path":"vDispuNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75934","object_id":"column-75934","name":"iRecordID","name_without_path":"iRecordID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75935","object_id":"column-75935","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75936","object_id":"column-75936","name":"cPsn_Name","name_without_path":"cPsn_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75937","object_id":"column-75937","name":"bHasBook","name_without_path":"bHasBook","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75938","object_id":"column-75938","name":"mDispuFile","name_without_path":"mDispuFile","description":null,"is_pk":false,"is_identity":false,"data_type":"UFMedia: image","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"create default D_UFMedia\r\n    as 0x00\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75939","object_id":"column-75939","name":"blastflag","name_without_path":"blastflag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75940","object_id":"column-75940","name":"vmemo","name_without_path":"vmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75941","object_id":"column-75941","name":"vstatus1","name_without_path":"vstatus1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75942","object_id":"column-75942","name":"nstatus2","name_without_path":"nstatus2","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75943","object_id":"column-75943","name":"mDispuFileqpb","name_without_path":"mDispuFileqpb","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75944","object_id":"column-75944","name":"hrts","name_without_path":"hrts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75945","object_id":"column-75945","name":"dDispuDate","name_without_path":"dDispuDate","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":"create default D_UFDate\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75946","object_id":"column-75946","name":"vWorkerAsk","name_without_path":"vWorkerAsk","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75947","object_id":"column-75947","name":"vDispuReason","name_without_path":"vDispuReason","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75948","object_id":"column-75948","name":"rDispuDealDept","name_without_path":"rDispuDealDept","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75949","object_id":"column-75949","name":"vDispuDealResult","name_without_path":"vDispuDealResult","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75950","object_id":"column-75950","name":"vIntercedeUnit","name_without_path":"vIntercedeUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75951","object_id":"column-75951","name":"dIntercedeBegin","name_without_path":"dIntercedeBegin","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDate\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75952","object_id":"column-75952","name":"dIntercedeEnd","name_without_path":"dIntercedeEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDate\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75953","object_id":"column-75953","name":"vIntercedeResult","name_without_path":"vIntercedeResult","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75954","object_id":"column-75954","name":"vMediateUnit","name_without_path":"vMediateUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75955","object_id":"column-75955","name":"dMediateBegin","name_without_path":"dMediateBegin","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDate\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75956","object_id":"column-75956","name":"dMediateEnd","name_without_path":"dMediateEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDate\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75957","object_id":"column-75957","name":"vMediateResult","name_without_path":"vMediateResult","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75958","object_id":"column-75958","name":"vLawUnit","name_without_path":"vLawUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75959","object_id":"column-75959","name":"dLawBegin","name_without_path":"dLawBegin","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDate\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75960","object_id":"column-75960","name":"dLawEnd","name_without_path":"dLawEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDate\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75961","object_id":"column-75961","name":"vLawResult","name_without_path":"vLawResult","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-75962","object_id":"column-75962","name":"m_DeptName","name_without_path":"m_DeptName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"600","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK_HR_HT_DISPU","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PK_Hr_HT_Dispu","name":"PK_Hr_HT_Dispu"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};