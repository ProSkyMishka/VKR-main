import SwiftUI

struct Childbb007: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb007-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb007(isOn: $on)
            Text(on ? "bb007-on" : "bb007-off").font(.headline)
        }
        .padding()
    }
}
