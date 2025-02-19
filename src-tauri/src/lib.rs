// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn setup_global_shortcuts(app: &mut tauri::App) -> Result<(), Box<dyn std::error::Error>> {
    use tauri::Emitter;
    use tauri_plugin_clipboard_manager::ClipboardExt;
    use tauri_plugin_global_shortcut::{
        Code, GlobalShortcutExt, Modifiers, Shortcut, ShortcutState,
    };

    let command_n_shortcut = Shortcut::new(Some(Modifiers::SUPER | Modifiers::SHIFT), Code::KeyV);
    app.handle().plugin(
        tauri_plugin_global_shortcut::Builder::new()
            .with_handler(move |app_handler, shortcut, event| {
                if shortcut == &command_n_shortcut {
                    match event.state() {
                        ShortcutState::Pressed => {
                            // Emit an event to the frontend
                            let content = app_handler.clipboard().read_text().unwrap();
                            app_handler.emit("clipboard_shortcut", content).unwrap();
                        }
                        ShortcutState::Released => {}
                    }
                }
            })
            .build(),
    )?;
    app.global_shortcut().register(command_n_shortcut)?;

    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            setup_global_shortcuts(app)?;
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
