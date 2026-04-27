import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(1...6, id: \.self) { k in
                Text("lx011-row \(k)")
            }
        }
    }
}
