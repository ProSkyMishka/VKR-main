import SwiftUI
struct SwitchView: View {
    @Binding var on: Bool
    var body: some View {
        Toggle("Switch", isOn: $on)
    }
}
struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            SwitchView(on: $on)
            Text(on ? "On" : "Off")
        }.padding()
    }
}
