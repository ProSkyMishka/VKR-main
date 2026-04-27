import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc009-a: \(a)")
            Text("mc009-b: \(b)")
            Text("mc009-c: \(c)")
            HStack {
                Button("mc009-incA") { a += 1 }
                Button("mc009-incB") { b += 2 }
                Button("mc009-incC") { c += 3 }
            }
            HStack {
                Button("mc009-rstA") { a = 0 }
                Button("mc009-rstB") { b = 0 }
                Button("mc009-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
