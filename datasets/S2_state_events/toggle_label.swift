import SwiftUI
struct ContentView: View {
    @State private var enabled = false
    var body: some View {
        Toggle(isOn: $enabled) {
            Text(enabled ? "On" : "Off")
        }.padding()
    }
}
