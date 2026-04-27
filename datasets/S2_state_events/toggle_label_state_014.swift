import SwiftUI

struct ContentView: View {
    @State private var on = false

    var body: some View {
        VStack(spacing: 10) {
            Toggle("tl014-switch", isOn: $on)
                .padding(.horizontal)
            Text(on ? "tl014-on" : "tl014-off")
                .font(.headline)
                .foregroundColor(on ? .green : .gray)
        }
        .padding()
    }
}
