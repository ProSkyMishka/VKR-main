import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc005-a: \(a)")
            Text("mc005-b: \(b)")
            Text("mc005-c: \(c)")
            HStack {
                Button("mc005-incA") { a += 1 }
                Button("mc005-incB") { b += 2 }
                Button("mc005-incC") { c += 3 }
            }
            HStack {
                Button("mc005-rstA") { a = 0 }
                Button("mc005-rstB") { b = 0 }
                Button("mc005-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
