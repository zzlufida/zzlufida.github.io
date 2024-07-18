window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11473","name":"hy_voucheritems_prn","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view hy_voucheritems_prn\r\nas\r\n\r\nselect\r\n\tvoucheritems_prn_base.VT_ID,\r\n\tvoucheritems_prn_base.CardNum,\r\n\tvoucheritems_prn_base.CardItemNum,\r\n\tvoucheritems_prn_base.CanNotSelect,\r\n\tvoucheritems_prn_base.ShowIt,\r\n\tvoucheritems_prn_base.LinkIt,\r\n\tvoucheritems_prn_base.LinkTbl,\r\n\tvoucheritems_prn_base.LinkField,\r\n\tvoucheritems_prn_base.TableName,\r\n\tvoucheritems_prn_base.FieldName,\r\n\tvoucheritems_prn_base.FieldType,\r\n\tvoucheritems_prn_base.ReferType,\r\n\tvoucheritems_prn_base.ReferTable,\r\n\tvoucheritems_prn_base.CardSection,\r\n\tvoucheritems_prn_base.CanModify,\r\n\tvoucheritems_prn_base.MaxLength,\r\n\tvoucheritems_prn_base.MaxShowLen,\r\n\tvoucheritems_prn_base.NumPoint,\r\n\tvoucheritems_prn_base.IsNull,\r\n\tvoucheritems_prn_base.CanDelete,\r\n\tvoucheritems_prn_base.UserCheck,\r\n\tvoucheritems_prn_base.UserPrompt,\r\n\tvoucheritems_prn_base.FormatChar,\r\n\tvoucheritems_prn_base.IsMain,\r\n\tvoucheritems_prn_base.NeedSum,\r\n\tvoucheritems_prn_base.CalcField,\r\n\tvoucheritems_prn_base.AliasNum,\r\n\tvoucheritems_prn_base.isSelfDef,\r\n\tvoucheritems_prn_base.Height,\r\n\tvoucheritems_prn_base.TabIndex,\r\n\tvoucheritems_prn_base.DefaultValue,\r\n\tvoucheritems_prn_base.IsFixedLenght,\r\n\tvoucheritems_prn_base.FormatData,\r\n\tvoucheritems_prn_base.PrintCaption,\r\n\tvoucheritems_prn_base.PrintUpcase,\r\n\tvoucheritems_prn_base.PrintInterval,\r\n\tvoucheritems_prn_base.DataSource,\r\n\tvoucheritems_prn_base.EnterType,\r\n\tvoucheritems_prn_base.DataRule,\r\n\tvoucheritems_prn_base.ValidityCheck,\r\n\tvoucheritems_prn_base.ReserveSegTitlePos,\r\n\tvoucheritems_prn_base.BuildArchives,\r\n\tvoucheritems_prn_base.ReferReturnField,\r\n\tvoucheritems_prn_base.cmemo,\r\n\tvoucheritems_prn_base.nBorder,\r\n\tvoucheritems_prn_base.pubufts,\r\n\tvoucheritems_prn_lang.localeid,\r\n\tvoucheritems_prn_lang.carditemname,\r\n\tvoucheritems_prn_lang.cardformula1,\r\n\tvoucheritems_prn_lang.cardformula2,\r\n\tvoucheritems_prn_lang.FontState,\r\n\tvoucheritems_prn_base.COX,\r\n\tvoucheritems_prn_base.COY,\r\n\tvoucheritems_prn_base.Width,\r\n\tvoucheritems_prn_lang.ufts,\r\n\tVoucherItems_prn_base.EnumType,\r\n\tVoucherItems_prn_base.IsEnum,\r\n\tVoucherItems_prn_base.EnumTypeString,\r\n\tVoucherItems_prn_base.bZeroAllowable,\r\n\tVoucherItems_prn_base.iFlags,\r\n\tVoucherItems_prn_base.vValueDefault,\r\n\tVoucherItems_prn_base.refObject,\r\n  VoucherItems_prn_base.AutoFillRule\r\nfrom voucheritems_prn_base\r\nleft join voucheritems_prn_lang on voucheritems_prn_base.vt_id=voucheritems_prn_lang.vt_id and voucheritems_prn_base.fieldname=voucheritems_prn_lang.fieldname and voucheritems_prn_base.cardsection=voucheritems_prn_lang.cardsection","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hy_voucheritems_prn"},{"field":"Type","value":"View"}],"columns":[{"id":"column-231990","object_id":"column-231990","name":"VT_ID","name_without_path":"VT_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231991","object_id":"column-231991","name":"CardNum","name_without_path":"CardNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231992","object_id":"column-231992","name":"CardItemNum","name_without_path":"CardItemNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231993","object_id":"column-231993","name":"CanNotSelect","name_without_path":"CanNotSelect","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231994","object_id":"column-231994","name":"ShowIt","name_without_path":"ShowIt","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231995","object_id":"column-231995","name":"LinkIt","name_without_path":"LinkIt","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231996","object_id":"column-231996","name":"LinkTbl","name_without_path":"LinkTbl","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231997","object_id":"column-231997","name":"LinkField","name_without_path":"LinkField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231998","object_id":"column-231998","name":"TableName","name_without_path":"TableName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231999","object_id":"column-231999","name":"FieldName","name_without_path":"FieldName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232000","object_id":"column-232000","name":"FieldType","name_without_path":"FieldType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232001","object_id":"column-232001","name":"ReferType","name_without_path":"ReferType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232002","object_id":"column-232002","name":"ReferTable","name_without_path":"ReferTable","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232003","object_id":"column-232003","name":"CardSection","name_without_path":"CardSection","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232004","object_id":"column-232004","name":"CanModify","name_without_path":"CanModify","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232005","object_id":"column-232005","name":"MaxLength","name_without_path":"MaxLength","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232006","object_id":"column-232006","name":"MaxShowLen","name_without_path":"MaxShowLen","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232007","object_id":"column-232007","name":"NumPoint","name_without_path":"NumPoint","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232008","object_id":"column-232008","name":"IsNull","name_without_path":"IsNull","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232009","object_id":"column-232009","name":"CanDelete","name_without_path":"CanDelete","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232010","object_id":"column-232010","name":"UserCheck","name_without_path":"UserCheck","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232011","object_id":"column-232011","name":"UserPrompt","name_without_path":"UserPrompt","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"28","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232012","object_id":"column-232012","name":"FormatChar","name_without_path":"FormatChar","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232013","object_id":"column-232013","name":"IsMain","name_without_path":"IsMain","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232014","object_id":"column-232014","name":"NeedSum","name_without_path":"NeedSum","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232015","object_id":"column-232015","name":"CalcField","name_without_path":"CalcField","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232016","object_id":"column-232016","name":"AliasNum","name_without_path":"AliasNum","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232017","object_id":"column-232017","name":"isSelfDef","name_without_path":"isSelfDef","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232018","object_id":"column-232018","name":"Height","name_without_path":"Height","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232019","object_id":"column-232019","name":"TabIndex","name_without_path":"TabIndex","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232020","object_id":"column-232020","name":"DefaultValue","name_without_path":"DefaultValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232021","object_id":"column-232021","name":"IsFixedLenght","name_without_path":"IsFixedLenght","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232022","object_id":"column-232022","name":"FormatData","name_without_path":"FormatData","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232023","object_id":"column-232023","name":"PrintCaption","name_without_path":"PrintCaption","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232024","object_id":"column-232024","name":"PrintUpcase","name_without_path":"PrintUpcase","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232025","object_id":"column-232025","name":"PrintInterval","name_without_path":"PrintInterval","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232026","object_id":"column-232026","name":"DataSource","name_without_path":"DataSource","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232027","object_id":"column-232027","name":"EnterType","name_without_path":"EnterType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232028","object_id":"column-232028","name":"DataRule","name_without_path":"DataRule","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232029","object_id":"column-232029","name":"ValidityCheck","name_without_path":"ValidityCheck","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232030","object_id":"column-232030","name":"ReserveSegTitlePos","name_without_path":"ReserveSegTitlePos","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232031","object_id":"column-232031","name":"BuildArchives","name_without_path":"BuildArchives","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232032","object_id":"column-232032","name":"ReferReturnField","name_without_path":"ReferReturnField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232033","object_id":"column-232033","name":"cmemo","name_without_path":"cmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232034","object_id":"column-232034","name":"nBorder","name_without_path":"nBorder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232035","object_id":"column-232035","name":"pubufts","name_without_path":"pubufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232036","object_id":"column-232036","name":"localeid","name_without_path":"localeid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232037","object_id":"column-232037","name":"carditemname","name_without_path":"carditemname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232038","object_id":"column-232038","name":"cardformula1","name_without_path":"cardformula1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232039","object_id":"column-232039","name":"cardformula2","name_without_path":"cardformula2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232040","object_id":"column-232040","name":"FontState","name_without_path":"FontState","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232041","object_id":"column-232041","name":"COX","name_without_path":"COX","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232042","object_id":"column-232042","name":"COY","name_without_path":"COY","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232043","object_id":"column-232043","name":"Width","name_without_path":"Width","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232044","object_id":"column-232044","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232045","object_id":"column-232045","name":"EnumType","name_without_path":"EnumType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"72","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232046","object_id":"column-232046","name":"IsEnum","name_without_path":"IsEnum","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232047","object_id":"column-232047","name":"EnumTypeString","name_without_path":"EnumTypeString","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232048","object_id":"column-232048","name":"bZeroAllowable","name_without_path":"bZeroAllowable","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232049","object_id":"column-232049","name":"iFlags","name_without_path":"iFlags","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232050","object_id":"column-232050","name":"vValueDefault","name_without_path":"vValueDefault","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232051","object_id":"column-232051","name":"refObject","name_without_path":"refObject","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-232052","object_id":"column-232052","name":"AutoFillRule","name_without_path":"AutoFillRule","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[{"name":"hy_tr_voucheritems_prn_insteadofdelete","description":null,"action":"Instead Of Delete ","custom_fields":{}},{"name":"hy_tr_voucheritems_prn_insteadofinsert","description":null,"action":"Instead Of Insert ","custom_fields":{}},{"name":"hy_tr_voucheritems_prn_insteadofupdate","description":null,"action":"Instead Of Update ","custom_fields":{}}],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};