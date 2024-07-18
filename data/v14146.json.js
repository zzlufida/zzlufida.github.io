window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14146","name":"voucheritems_prn","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--liuchhc end\r\n\r\n---zhaoyin3  打印模板视图增加多表头字段cMultiTableHeaderTitle\r\n  \r\nCREATE view voucheritems_prn    \r\nas    \r\n    \r\nselect    \r\n voucheritems_prn_base.VT_ID,    \r\n voucheritems_prn_base.CardNum,    \r\n voucheritems_prn_base.CardItemNum,    \r\n voucheritems_prn_base.CanNotSelect,    \r\n voucheritems_prn_base.ShowIt,    \r\n voucheritems_prn_base.LinkIt,    \r\n voucheritems_prn_base.LinkTbl,    \r\n voucheritems_prn_base.LinkField,    \r\n voucheritems_prn_base.TableName,    \r\n voucheritems_prn_base.FieldName,    \r\n voucheritems_prn_base.FieldType,    \r\n voucheritems_prn_base.ReferType,    \r\n voucheritems_prn_base.ReferTable,    \r\n voucheritems_prn_base.CardSection,    \r\n voucheritems_prn_base.CanModify,    \r\n voucheritems_prn_base.MaxLength,    \r\n voucheritems_prn_base.MaxShowLen,    \r\n voucheritems_prn_base.NumPoint,    \r\n voucheritems_prn_base.IsNull,    \r\n voucheritems_prn_base.CanDelete,    \r\n voucheritems_prn_base.UserCheck,    \r\n voucheritems_prn_base.UserPrompt,    \r\n voucheritems_prn_base.FormatChar,    \r\n voucheritems_prn_base.IsMain,    \r\n voucheritems_prn_base.NeedSum,    \r\n voucheritems_prn_base.CalcField,    \r\n voucheritems_prn_base.AliasNum,    \r\n voucheritems_prn_base.isSelfDef,    \r\n voucheritems_prn_base.Height,    \r\n voucheritems_prn_base.TabIndex,    \r\n voucheritems_prn_base.DefaultValue,    \r\n voucheritems_prn_base.IsFixedLenght,    \r\n voucheritems_prn_base.FormatData,    \r\n voucheritems_prn_base.PrintCaption,    \r\n voucheritems_prn_base.PrintUpcase,    \r\n voucheritems_prn_base.PrintInterval,    \r\n voucheritems_prn_base.DataSource,    \r\n voucheritems_prn_base.EnterType,    \r\n voucheritems_prn_base.DataRule,    \r\n voucheritems_prn_base.ValidityCheck,    \r\n voucheritems_prn_base.ReserveSegTitlePos,    \r\n voucheritems_prn_base.BuildArchives,    \r\n voucheritems_prn_base.ReferReturnField,    \r\n voucheritems_prn_base.cmemo,    \r\n voucheritems_prn_base.nBorder,    \r\n voucheritems_prn_base.pubufts,    \r\n voucheritems_prn_lang.localeid,    \r\n voucheritems_prn_lang.carditemname,    \r\n voucheritems_prn_lang.cardformula1,    \r\n voucheritems_prn_lang.cardformula2,    \r\n voucheritems_prn_lang.FontState,    \r\n voucheritems_prn_base.COX,    \r\n voucheritems_prn_base.COY,    \r\n voucheritems_prn_base.Width,    \r\n voucheritems_prn_lang.ufts,    \r\n VoucherItems_prn_base.EnumType,    \r\n VoucherItems_prn_base.IsEnum,    \r\n VoucherItems_prn_base.EnumTypeString,    \r\n VoucherItems_prn_base.bZeroAllowable,    \r\n VoucherItems_prn_base.iFlags,    \r\n VoucherItems_prn_base.vValueDefault,  \r\n VoucherItems_prn_base.bextended,  \r\n VoucherItems_prn_base.bIMFld,  \r\n VoucherItems_prn_base.bAutoComplete,\r\n voucheritems_prn_lang.cMultiTableHeaderTitle   \r\nfrom voucheritems_prn_base    \r\nleft join voucheritems_prn_lang on voucheritems_prn_base.vt_id=voucheritems_prn_lang.vt_id and voucheritems_prn_base.fieldname=voucheritems_prn_lang.fieldname and voucheritems_prn_base.cardsection=voucheritems_prn_lang.cardsection    \r\nand voucheritems_prn_lang.localeid=DBO.UDF_GetLocaleID()","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"voucheritems_prn"},{"field":"Type","value":"View"}],"columns":[{"id":"column-418614","object_id":"column-418614","name":"VT_ID","name_without_path":"VT_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418615","object_id":"column-418615","name":"CardNum","name_without_path":"CardNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418616","object_id":"column-418616","name":"CardItemNum","name_without_path":"CardItemNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418617","object_id":"column-418617","name":"CanNotSelect","name_without_path":"CanNotSelect","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418618","object_id":"column-418618","name":"ShowIt","name_without_path":"ShowIt","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418619","object_id":"column-418619","name":"LinkIt","name_without_path":"LinkIt","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418620","object_id":"column-418620","name":"LinkTbl","name_without_path":"LinkTbl","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418621","object_id":"column-418621","name":"LinkField","name_without_path":"LinkField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418622","object_id":"column-418622","name":"TableName","name_without_path":"TableName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418623","object_id":"column-418623","name":"FieldName","name_without_path":"FieldName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418624","object_id":"column-418624","name":"FieldType","name_without_path":"FieldType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418625","object_id":"column-418625","name":"ReferType","name_without_path":"ReferType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418626","object_id":"column-418626","name":"ReferTable","name_without_path":"ReferTable","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418627","object_id":"column-418627","name":"CardSection","name_without_path":"CardSection","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418628","object_id":"column-418628","name":"CanModify","name_without_path":"CanModify","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418629","object_id":"column-418629","name":"MaxLength","name_without_path":"MaxLength","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418630","object_id":"column-418630","name":"MaxShowLen","name_without_path":"MaxShowLen","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418631","object_id":"column-418631","name":"NumPoint","name_without_path":"NumPoint","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418632","object_id":"column-418632","name":"IsNull","name_without_path":"IsNull","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418633","object_id":"column-418633","name":"CanDelete","name_without_path":"CanDelete","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418634","object_id":"column-418634","name":"UserCheck","name_without_path":"UserCheck","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418635","object_id":"column-418635","name":"UserPrompt","name_without_path":"UserPrompt","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"28","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418636","object_id":"column-418636","name":"FormatChar","name_without_path":"FormatChar","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418637","object_id":"column-418637","name":"IsMain","name_without_path":"IsMain","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418638","object_id":"column-418638","name":"NeedSum","name_without_path":"NeedSum","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418639","object_id":"column-418639","name":"CalcField","name_without_path":"CalcField","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418640","object_id":"column-418640","name":"AliasNum","name_without_path":"AliasNum","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418641","object_id":"column-418641","name":"isSelfDef","name_without_path":"isSelfDef","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418642","object_id":"column-418642","name":"Height","name_without_path":"Height","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418643","object_id":"column-418643","name":"TabIndex","name_without_path":"TabIndex","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418644","object_id":"column-418644","name":"DefaultValue","name_without_path":"DefaultValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418645","object_id":"column-418645","name":"IsFixedLenght","name_without_path":"IsFixedLenght","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418646","object_id":"column-418646","name":"FormatData","name_without_path":"FormatData","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418647","object_id":"column-418647","name":"PrintCaption","name_without_path":"PrintCaption","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418648","object_id":"column-418648","name":"PrintUpcase","name_without_path":"PrintUpcase","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418649","object_id":"column-418649","name":"PrintInterval","name_without_path":"PrintInterval","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418650","object_id":"column-418650","name":"DataSource","name_without_path":"DataSource","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418651","object_id":"column-418651","name":"EnterType","name_without_path":"EnterType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418652","object_id":"column-418652","name":"DataRule","name_without_path":"DataRule","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418653","object_id":"column-418653","name":"ValidityCheck","name_without_path":"ValidityCheck","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418654","object_id":"column-418654","name":"ReserveSegTitlePos","name_without_path":"ReserveSegTitlePos","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418655","object_id":"column-418655","name":"BuildArchives","name_without_path":"BuildArchives","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418656","object_id":"column-418656","name":"ReferReturnField","name_without_path":"ReferReturnField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418657","object_id":"column-418657","name":"cmemo","name_without_path":"cmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418658","object_id":"column-418658","name":"nBorder","name_without_path":"nBorder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418659","object_id":"column-418659","name":"pubufts","name_without_path":"pubufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418660","object_id":"column-418660","name":"localeid","name_without_path":"localeid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418661","object_id":"column-418661","name":"carditemname","name_without_path":"carditemname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418662","object_id":"column-418662","name":"cardformula1","name_without_path":"cardformula1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418663","object_id":"column-418663","name":"cardformula2","name_without_path":"cardformula2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418664","object_id":"column-418664","name":"FontState","name_without_path":"FontState","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418665","object_id":"column-418665","name":"COX","name_without_path":"COX","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418666","object_id":"column-418666","name":"COY","name_without_path":"COY","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418667","object_id":"column-418667","name":"Width","name_without_path":"Width","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418668","object_id":"column-418668","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418669","object_id":"column-418669","name":"EnumType","name_without_path":"EnumType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"72","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418670","object_id":"column-418670","name":"IsEnum","name_without_path":"IsEnum","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418671","object_id":"column-418671","name":"EnumTypeString","name_without_path":"EnumTypeString","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418672","object_id":"column-418672","name":"bZeroAllowable","name_without_path":"bZeroAllowable","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418673","object_id":"column-418673","name":"iFlags","name_without_path":"iFlags","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418674","object_id":"column-418674","name":"vValueDefault","name_without_path":"vValueDefault","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418675","object_id":"column-418675","name":"bextended","name_without_path":"bextended","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418676","object_id":"column-418676","name":"bIMFld","name_without_path":"bIMFld","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418677","object_id":"column-418677","name":"bAutoComplete","name_without_path":"bAutoComplete","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418678","object_id":"column-418678","name":"cMultiTableHeaderTitle","name_without_path":"cMultiTableHeaderTitle","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"800","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[{"name":"TR_Voucheritems_prn_InsteadofDelete","description":null,"action":"Instead Of Delete ","custom_fields":{}},{"name":"TR_Voucheritems_prn_InsteadofInsert","description":null,"action":"Instead Of Insert ","custom_fields":{}},{"name":"TR_Voucheritems_prn_InsteadofUpdate","description":null,"action":"Instead Of Update ","custom_fields":{}}],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};