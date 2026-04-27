import SwiftUI

struct ContentView: View {
    @State private var step = 1

    var body: some View {
        VStack(spacing: 10) {
            Text("wz013-step: \(step)").font(.headline)
            if step == 1 { Text("wz013-intro") }
            if step == 2 { Text("wz013-second") }
            if step == 3 { Text("wz013-finish") }
            HStack {
                Button("wz013-back") { if step > 1 { step -= 1 } }
                Button("wz013-next") { if step < 3 { step += 1 } }
            }
        }
        .padding()
    }
}
