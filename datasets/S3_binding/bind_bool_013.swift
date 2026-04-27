import SwiftUI

struct Childbb013: View {
    @Binding var isOn: Bool
    var body: some View {
        Toggle("bb013-sw", isOn: $isOn)
    }
}

struct ContentView: View {
    @State private var on = false
    var body: some View {
        VStack {
            Childbb013(isOn: $on)
            Text(on ? "bb013-on" : "bb013-off").font(.headline)
        }
        .padding()
    }
}
