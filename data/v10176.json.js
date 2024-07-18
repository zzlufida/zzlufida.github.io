window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10176","name":"CM_QAlterDetail_Clause","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE View CM_QAlterDetail_Clause\r\nas\r\nselect  Ch.GUID,\r\n\t'' As hcClauseName,\t\tM.strName \t\tAs fcClauseName,\r\n\t'' As hcClauseMemo,\t\tM.strMemo \t\tAs fcClauseMemo\t\r\nfrom CM_QAlterClauseBase M \r\nInner Join\r\n(\tSelect distinct GUID,RowGUID from\r\n\t(select GUID,RowGUID,Count(OriValue) As Row from CM_Change \r\n\tWhere strTbl like 'CM_Contract_Caluse__' And OriValue<>'' And cValue ='' \r\n\tGroup By GUID,RowGUID) CC Where Row>=2\t\t--条款被删除\r\n) Ch On M.RowGUID =Ch.RowGUID\r\nWhere M.intVaryID In (\t\t\t\t\t--加入以下判断，否则会把该条款以前变更过的信息都显示出来了\r\n\tSelect Max(intVaryID) As intVaryID From CM_QAlterClauseBase M Inner Join\r\n\t(\tSelect distinct GUID,RowGUID from\r\n\t\t(select GUID,RowGUID,Count(OriValue) As Row from CM_Change \r\n\t\tWhere strTbl like 'CM_Contract_Caluse__' And OriValue<>'' And cValue ='' \r\n\t\tGroup By GUID,RowGUID) CC Where Row>=2\t\t--条款被删除\r\n\t--) Ch On M.RowGUID =Ch.RowGUID) U82015122800392 增加 GROUP BY M.RowGUID\r\n\t) Ch On M.RowGUID =Ch.RowGUID GROUP BY M.RowGUID)\r\nUnion \r\nselect Ch.GUID,\r\n\tB.strName \t\tAs hcClauseName,\tA.strName \t\tAs fcClauseName,\r\n\tB.strMemo \t\tAs hcClauseMemo,\tA.strMemo \t\tAs fcClauseMemo\t\r\nfrom CM_QAlterClauseBase A\r\nLeft Join CM_QAlterClauseBase B On B.RowGUID=A.RowGUID And A.intVaryID=B.intVaryID-1 \r\nInner Join\r\n(\tSelect distinct GUID,RowGUID from CM_Change \r\n\tWhere strTbl like 'CM_Contract_Caluse__' And OriValue<>'' And cValue ='' --条款以前有值，现在清空\r\n) Ch On A.RowGUID =Ch.RowGUID And B.GUID=Ch.GUID\r\nUnion \r\nselect Ch.GUID,\r\n\tB.strName \t\tAs hcClauseName,\tA.strName \t\tAs fcClauseName,\r\n\tB.strMemo \t\tAs hcClauseMemo,\tA.strMemo \t\tAs fcClauseMemo\t\r\nfrom CM_QAlterClauseBase B \r\nLeft Join CM_QAlterClauseBase A On B.RowGUID=A.RowGUID And B.intVaryID=A.intVaryID+1 \r\nInner Join\r\n(\tSelect distinct GUID,RowGUID from CM_Change \r\n\tWhere strTbl like 'CM_Contract_Caluse__' And OriValue='' And cValue <>'' --条款新增的和以前没有值，现在有值了\r\n) Ch On B.RowGUID =Ch.RowGUID And B.GUID=Ch.GUID\r\nUnion \r\nselect Ch.GUID,\r\n\tB.strName \t\tAs hcClauseName,\tA.strName \t\tAs fcClauseName,\r\n\tB.strMemo \t\tAs hcClauseMemo,\tA.strMemo \t\tAs fcClauseMemo\t\r\nfrom CM_QAlterClauseBase B\r\nInner Join CM_QAlterClauseBase A On B.RowGUID=A.RowGUID And B.intVaryID=A.intVaryID+1 \r\nInner Join \r\n(\r\n\tSelect distinct GUID,RowGUID from CM_Change \r\n\tWhere strTbl like 'CM_Contract_Caluse__' And OriValue<>'' And cValue <>''\t\t--修改的\r\n)Ch On B.RowGUID =Ch.RowGUID And B.GUID=Ch.GUID\r\n----- And B.GUID=Ch.GUID\t加入该条件，过滤掉多查出来的变更历史记录","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CM_QAlterDetail_Clause"},{"field":"Type","value":"View"}],"columns":[{"id":"column-175306","object_id":"column-175306","name":"GUID","name_without_path":"GUID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-175307","object_id":"column-175307","name":"hcClauseName","name_without_path":"hcClauseName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-175308","object_id":"column-175308","name":"fcClauseName","name_without_path":"fcClauseName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-175309","object_id":"column-175309","name":"hcClauseMemo","name_without_path":"hcClauseMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-175310","object_id":"column-175310","name":"fcClauseMemo","name_without_path":"fcClauseMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};