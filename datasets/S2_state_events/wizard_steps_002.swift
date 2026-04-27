import SwiftUI

struct ContentView: View {
    @State private var step = 1

    var body: some View {
        VStack(spacing: 10) {
            Text("wz002-step: \(step)").font(.headline)
            if step == 1 { Text("wz002-intro") }
            if step == 2 { Text("wz002-second") }
            if step == 3 { Text("wz002-finish") }
            HStack {
                Button("wz002-back") { if step > 1 { step -= 1 } }
                Button("wz002-next") { if step < 3 { step += 1 } }
            }
        }
        .padding()
    }
}
