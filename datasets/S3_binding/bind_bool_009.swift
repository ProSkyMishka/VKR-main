import SwiftUI

struct Childbb009: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb009-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb009(isOn: $on)
            Text(on ? "bb009-on" : "bb009-off").font(.headline)
        }
        .padding()
    }
}
